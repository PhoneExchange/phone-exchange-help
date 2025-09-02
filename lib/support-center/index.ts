"use server";

import { sdk } from "@/lib/config";
import { SupportArticle, SupportCategory } from "./types";
import { sanitizeSupportHtml } from "../utils/safeHtml";

//Categories
export async function retrieveSupportCategories(id: string) {
  return sdk.client.fetch<{ category: SupportCategory }>(`/store/support-center/categories/${id}`);
}

export async function listSupportCategories() {
  try {
    return sdk.client.fetch<{ categories: SupportCategory[] }>("/store/support-center/categories");
  } catch {
    return { categories: [] };
  }
}

//Articles
export async function retrieveSupportArticle({ slug }: { slug: string }) {
  return sdk.client
    .fetch<{ article: SupportArticle }>(`/store/support-center/articles/slug/${slug}`)
    .then(({ article }) => {
      return { article: { ...article, content_html: sanitizeSupportHtml(article.content_html) } };
    });
}

export async function listSupportArticlesByCategory(categoryId: string) {
  return sdk.client.fetch<{ articles: SupportArticle[] }>(`store/support-center/categories/${categoryId}/articles`);
}

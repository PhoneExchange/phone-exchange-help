import Link from "next/link";
import { listSupportArticlesByCategory } from "@/lib/support-center";
import type { SupportArticle } from "@/lib/support-center/types";

type Props = {
  article: SupportArticle; // 현재 글
  limit?: number;
};

export async function RelatedArticles({ article, limit = 5 }: Props) {
  if (!article.category_id) return null;

  // 같은 카테고리의 글 가져오기
  const { articles } = await listSupportArticlesByCategory(article.category_id);

  // 현재 글 제외
  const others = (articles ?? []).filter((a) => a.id !== article.id).slice(0, limit);

  if (others.length === 0) return null;

  return (
    <aside className="mt-3 border-t border-gray-200 pt-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">More articles in this category</h2>
      <ul className="space-y-2">
        {others.map((a) => (
          <li key={a.id}>
            <Link href={`/support/a/${a.slug}`} className="text-sm text-indigo-700 hover:underline">
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

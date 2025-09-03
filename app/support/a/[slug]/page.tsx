import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listSupportArticles, retrieveSupportArticle, retrieveSupportCategory } from "@/lib/support-center";
import { ArticleView } from "@/components/article/ArticleView";
import { CurvedBg } from "@/components/common/CurvedBg";
import { RelatedArticles } from "@/components/article/RelatedArticles";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { article } = await retrieveSupportArticle({ slug });
    if (!article) {
      return { title: "Article not found — Help Center" };
    }
    return {
      title: `${article.title} | Help Center`,
      description: ("excerpt" in article && (article as any).excerpt) || "Support article from the Help Center.",
      openGraph: {
        title: `${article.title} | Help Center`,
        description: ("excerpt" in article && (article as any).excerpt) || "Support article from the Help Center.",
        type: "article",
      },
    };
  } catch {
    return { title: "Help Center" };
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { article } = await retrieveSupportArticle({ slug });

  if (!article || article.status !== "published") {
    notFound();
  }

  return (
    <section className="phonex-container">
      {/* <CurvedBg height={56} /> */}
      <ArticleView article={article} />
      <RelatedArticles article={article} />
    </section>
  );
}

export async function generateStaticParams() {
  const { articles } = await listSupportArticles();

  return articles.map(({ slug }) => ({
    slug: slug,
  }));
}

import { SupportArticle } from "@/lib/support-center/types";
import { format } from "date-fns";
import Link from "next/link";

type Props = {
  article: SupportArticle;
};

export function ArticleView({ article }: Props) {
  return (
    <article className="py-6">
      <nav className="mb-3 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Help Center
        </Link>
        <span className="px-2">/</span>
        <span className="text-gray-700">{article.title}</span>
      </nav>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-950">{article.title}</h1>
        {/* <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
          <span>👍 {article.helpful_count ?? 0}</span>
          <span>👎 {article.not_helpful_count ?? 0}</span>
        </div> */}
        {article.created_at && (
          <span className="text-gray-700 text-sm">{format(new Date(article.created_at), "PPP")}</span>
        )}
      </div>

      <div
        className="prose prose-slate max-w-none phonex-content mt-5 sm:mt-10"
        dangerouslySetInnerHTML={{ __html: article.content_html }}
      />
    </article>
  );
}

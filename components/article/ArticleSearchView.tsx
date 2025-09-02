import { SupportArticle } from "@/lib/support-center/types";
import { getArticleExcerpt } from "@/lib/utils/tiptap-truncate";
import { format } from "date-fns";
import Link from "next/link";

type Props = {
  articles: SupportArticle[];
};

export function ArticleSearchView({ articles }: Props) {
  return (
    <div className="py-5">
      {articles.length === 0 ? (
        <p className="text-gray-500">No articles found.</p>
      ) : (
        <ul className="space-y-3">
          {articles.map((a: SupportArticle) => (
            <li key={a.id} className="border-b border-gray-200 py-3">
              <Link href={`/support/a/${a.slug}`} className="">
                <div className="mb-5">
                  <h2 className=" font-semibold text-gray-900">{a.title}</h2>
                  <span className="text-gray-700 text-xs">{format(new Date(a.created_at), "PPP")}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{getArticleExcerpt(a, 140)}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { listSupportArticles } from "@/lib/support-center";
import { ArticleSearchView } from "@/components/article/ArticleSearchView";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams;

  const { articles } = await listSupportArticles(q);

  return (
    <>
      <section className="phonex-container mt-3 sm:mt-14">
        <h1 className="text-2xl font-bold text-indigo-950">Search results {q && <>for “{q}”</>}</h1>
      </section>
      <section className="phonex-container mt-3 sm:mt-7">
        <ArticleSearchView articles={articles} />
      </section>
    </>
  );
}

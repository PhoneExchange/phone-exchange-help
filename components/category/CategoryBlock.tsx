import Link from "next/link";
import { listSupportArticlesByCategory } from "@/lib/support-center";
import type { SupportCategory } from "@/lib/support-center/types";

type Props = {
  category: SupportCategory;
};

export async function CategoryBlock({ category }: Props) {
  const { articles } = await listSupportArticlesByCategory(category.id);

  return (
    <div className="mt-5">
      <div className="mb-3 space-y-1">
        <h3 className="text-lg font-semibold text-indigo-950">{category.title}</h3>
        <p className="text-sm text-gray-600">{category.description}</p>
      </div>

      <ul className="flex flex-col gap-2">
        {articles.map((a) => (
          <li key={a.id}>
            <Link href={`/support/a/${a.slug}`} className="group inline-flex items-center gap-2 rounded-md px-2">
              <span className="inline-block h-1.5 w-1.5 flex-none rounded-full bg-indigo-300" />
              <span className="text-sm text-indigo-900 hover:underline cursor-pointer">{a.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { SupportCategory } from "@/lib/support-center/types";
import { CategoryBlock } from "./CategoryBlock";

type Props = {
  categories: SupportCategory[];
};

export async function CategoryContainer({ categories }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-3">
      {categories.map((c) => (
        <CategoryBlock category={c} key={c.id} />
      ))}
    </div>
  );
}

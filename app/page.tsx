import { CategoryContainer } from "@/components/category/CategoryContainer";
import { ContactForm } from "@/components/common/ContactForm";
import { ContactSection } from "@/components/common/ContactSection";
import { CurvedBg } from "@/components/common/CurvedBg";
import { HeroSlogun } from "@/components/home/HeroSlogun";
import { HomeSearchBar } from "@/components/home/HomeSearchBar";
import { listSupportCategories } from "@/lib/support-center";

export const revalidate = 86400;
export const dynamic = "force-static";

export default async function Home() {
  const { categories } = await listSupportCategories();

  return (
    <>
      <CurvedBg />
      <section className="phonex-container">
        <HeroSlogun />
        <HomeSearchBar />
      </section>
      <section className="phonex-container mt-5 sm:mt-15">
        <CategoryContainer categories={categories} />
      </section>
      <section className="phonex-container mt-5 sm:mt-15">
        <ContactSection />
      </section>
    </>
  );
}

import { CurvedBg } from "@/components/common/CurvedBg";
import { HeroSlogun } from "@/components/home/HeroSlogun";
import { HomeSearchBar } from "@/components/home/HomeSearchBar";

export default function Home() {
  return (
    <>
      <CurvedBg />
      <section className="phonex-container">
        <HeroSlogun />
        <HomeSearchBar />
      </section>
    </>
  );
}

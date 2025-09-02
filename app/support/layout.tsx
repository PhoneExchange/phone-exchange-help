import { CurvedBg } from "@/components/common/CurvedBg";
import { SearchInputBar } from "@/components/common/SearchInputBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="hidden sm:block">
        <CurvedBg height={130} />
      </div>
      <div className="sm:hidden">
        <CurvedBg height={90} />
      </div>
      <section className="phonex-container">
        <div className="mx-auto max-w-2xl my-3 sm:my-10">
          <SearchInputBar />
        </div>
      </section>
      {children}
    </>
  );
}

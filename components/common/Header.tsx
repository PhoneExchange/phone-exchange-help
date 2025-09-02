import Logo from "./Logo";

export function Header() {
  return (
    <header className="w-full py-4">
      <div className="phonex-container flex justify-between items-center">
        <div className="hidden sm:block">
          <Logo size={0.8} />
        </div>
        <div className="flex relative justify-center w-full items-center gap-2 sm:hidden">
          <Logo size={0.6} />
        </div>
      </div>
    </header>
  );
}

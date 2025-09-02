import Link from "next/link";
import Logo from "./Logo";

export function Header() {
  return (
    <header className="w-full py-4">
      <div className="phonex-container flex justify-between items-center">
        <div>
          <div className="hidden sm:block">
            <Logo size={0.8} />
          </div>
          <div className="sm:hidden">
            <Logo size={0.6} />
          </div>
        </div>
        <Link href={"https://www.phonexchange.com.au/"}>
          <span className="text-sm hover:underline cursor-pointer text-gray-700">Go back to shop</span>
        </Link>
      </div>
    </header>
  );
}

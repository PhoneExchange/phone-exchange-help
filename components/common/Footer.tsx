import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-sm mt-10">
      <div className="phonex-container grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        {/* Brand Info */}
        <div>
          <div className="flex items-center mb-4 gap-2">
            <Image src="/images/logo-only-white.svg" alt="phone exchange" width={17} height={17} />
            <h2 className="text-lg font-semibold">Phone Exchange</h2>
          </div>
          <p>Your trusted source for high-quality refurbished phones in Australia.</p>
          <p className="mt-4 text-gray-400">© {new Date().getFullYear()} Phone Exchange. All rights reserved.</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            {/* <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li> */}
            <li>
              <Link href="/offline-shops" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/warranty-return" className="hover:underline">
                Warranty & Return
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

type Props = {
  size?: number;
};

export default function Logo({ size = 1 }: Props) {
  const width = 250 * size;
  const height = 66 * size;

  const baseClass = "h-auto";
  const extraClass = size === 1 ? "w-[200px] sm:w-[250px]" : "";

  return (
    <div className="flex items-center">
      <Link href="/">
        <Image
          priority
          src="/images/logo.svg"
          alt="Phone Exchange Logo"
          width={width}
          height={height}
          className={`${baseClass} ${extraClass}`}
        />
      </Link>
    </div>
  );
}

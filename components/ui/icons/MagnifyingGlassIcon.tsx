import { Search } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function MagnifyingGlassIcon({ colour, size, className }: Prop) {
  return <Search color={colour} size={size} className={className} />;
}

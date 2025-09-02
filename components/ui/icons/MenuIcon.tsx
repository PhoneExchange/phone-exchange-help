import { Menu } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function MenuIcon({ colour, size, className }: Prop) {
  return <Menu color={colour} size={size} className={className} />;
}

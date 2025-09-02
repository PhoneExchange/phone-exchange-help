import { ShoppingBag } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function ShoppingBagIcon({ colour, size, className }: Prop) {
  return <ShoppingBag color={colour} size={size} className={className} />;
}

import { ShoppingCart } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function CartIcon({ colour, size, className }: Prop) {
  return <ShoppingCart color={colour} size={size} className={className} />;
}

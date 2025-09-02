import { Store } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function StoreIcon({ colour, size, className }: Prop) {
  return <Store color={colour} size={size} className={className} />;
}

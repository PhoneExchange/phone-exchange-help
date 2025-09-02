import { HandCoins } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function HandCoinsIcon({ colour, size, className }: Prop) {
  return <HandCoins color={colour} size={size} className={className} />;
}

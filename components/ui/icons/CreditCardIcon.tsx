import { CreditCard } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function CreditCardIcon({ colour, size, className }: Prop) {
  return <CreditCard color={colour} size={size} className={className} />;
}

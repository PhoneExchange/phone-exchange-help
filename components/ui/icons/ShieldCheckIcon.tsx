import { ShieldCheck } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function ShieldCheckIcon({ colour, size, className }: Prop) {
  return <ShieldCheck color={colour} size={size} className={className} />;
}

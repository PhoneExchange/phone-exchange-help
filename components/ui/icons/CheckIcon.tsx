import { Check } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function CheckIcon({ colour, size, className }: Prop) {
  return <Check color={colour} size={size} className={className} />;
}

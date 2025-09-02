import { BadgeCheck } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function BadgeCheckedIcon({ colour, size, className }: Prop) {
  return <BadgeCheck color={colour} size={size} className={className} />;
}

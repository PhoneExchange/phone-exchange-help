import { SlidersHorizontal } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function HorizontalSlidersIcon({ colour, size, className }: Prop) {
  return <SlidersHorizontal color={colour} size={size} className={className} />;
}

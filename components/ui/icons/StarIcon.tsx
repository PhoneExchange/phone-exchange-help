import { Star } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function StarIcon({ colour, size, className }: Prop) {
  return <Star color={colour} size={size} className={className} />;
}

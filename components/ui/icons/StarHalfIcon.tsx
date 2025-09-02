import { StarHalf } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function StarHalfIcon({ colour, size, className }: Prop) {
  return <StarHalf color={colour} size={size} className={className} />;
}

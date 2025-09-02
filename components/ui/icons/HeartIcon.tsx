import { Heart } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function HeartIcon({ colour, size, className }: Prop) {
  return <Heart color={colour} size={size} className={className} />;
}

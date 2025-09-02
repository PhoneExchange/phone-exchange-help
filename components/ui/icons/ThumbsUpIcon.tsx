import { ThumbsUp } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function ThumbsUpIcon({ colour, size, className }: Prop) {
  return <ThumbsUp color={colour} size={size} className={className} />;
}

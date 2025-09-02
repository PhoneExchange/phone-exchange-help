import { SquaresExclude } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function SquaresExcludeIcon({ colour, size, className }: Prop) {
  return <SquaresExclude color={colour} size={size} className={className} />;
}

import { Home } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function HomeIcon({ colour, size, className }: Prop) {
  return <Home color={colour} size={size} className={className} />;
}

import { Trash2 } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function BinIcon({ colour, size, className }: Prop) {
  return <Trash2 color={colour} size={size} className={className} />;
}

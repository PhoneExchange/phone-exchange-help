import { Wrench } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function WrenchIcon({ colour, size, className }: Prop) {
  return <Wrench color={colour} size={size} className={className} />;
}

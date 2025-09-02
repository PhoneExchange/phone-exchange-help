import { HeartHandshake } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function IdealIcon({ colour, size, className }: Prop) {
  return <HeartHandshake color={colour} size={size} className={className} />;
}

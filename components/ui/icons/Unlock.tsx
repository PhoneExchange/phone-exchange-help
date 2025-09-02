import { Unlock } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function UnlockIcon({ colour, size, className }: Prop) {
  return <Unlock color={colour} size={size} className={className} />;
}

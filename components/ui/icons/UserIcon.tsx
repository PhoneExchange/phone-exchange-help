import { User } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function UserIcon({ colour, size, className }: Prop) {
  return <User color={colour} size={size} className={className} />;
}

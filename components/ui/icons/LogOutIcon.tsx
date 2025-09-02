import { LogOut } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function LogOutIcon({ colour, size, className }: Prop) {
  return <LogOut color={colour} size={size} className={className} />;
}

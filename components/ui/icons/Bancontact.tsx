import { BadgeDollarSign } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function BancontactIcon({ colour, size, className }: Prop) {
  return <BadgeDollarSign color={colour} size={size} className={className} />;
}

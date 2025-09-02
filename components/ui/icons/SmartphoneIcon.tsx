import { Smartphone } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function SmartphoneIcon({ colour, size, className }: Prop) {
  return <Smartphone color={colour} size={size} className={className} />;
}

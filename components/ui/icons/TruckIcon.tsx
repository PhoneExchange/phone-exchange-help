import { Truck } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function TruckIcon({ colour, size, className }: Prop) {
  return <Truck color={colour} size={size} className={className} />;
}

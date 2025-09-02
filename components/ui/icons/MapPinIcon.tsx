import { MapPin } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function MapPinIcon({ colour, size, className }: Prop) {
  return <MapPin color={colour} size={size} className={className} />;
}

import { RefreshCcw } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function ResetIcon({ colour, size, className }: Prop) {
  return <RefreshCcw color={colour} size={size} className={className} />;
}

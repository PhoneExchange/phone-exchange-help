import { CircleHelp } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function CircleQuestionIcon({ colour, size, className }: Prop) {
  return <CircleHelp color={colour} size={size} className={className} />;
}

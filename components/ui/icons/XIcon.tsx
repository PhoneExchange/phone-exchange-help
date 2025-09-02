import { X, type LucideProps } from "lucide-react";

type Prop = LucideProps & {
  colour?: string;
};

export function XIcon({ colour, color, ...rest }: Prop) {
  return <X color={colour ?? color} {...rest} />;
}

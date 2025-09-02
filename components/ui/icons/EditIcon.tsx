import { Edit } from "lucide-react";

type Prop = {
  colour?: string;
  size?: number;
  className?: string;
};

export function EditIcon({ colour, size, className }: Prop) {
  return <Edit color={colour} size={size} className={className} />;
}

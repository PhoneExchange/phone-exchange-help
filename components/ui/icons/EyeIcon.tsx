import { Eye, EyeOff } from "lucide-react";

export enum EyeState {
  On,
  Off,
}

type Props = {
  colour?: string;
  size?: number;
  state: EyeState;
  className?: string;
};

export function EyeIcon({ colour, size, state, className }: Props) {
  let IconComponent;

  switch (state) {
    case EyeState.On:
      IconComponent = Eye;
      break;
    case EyeState.Off:
      IconComponent = EyeOff;
      break;
    default:
      IconComponent = Eye;
  }

  return <IconComponent color={colour} size={size} className={className} />;
}

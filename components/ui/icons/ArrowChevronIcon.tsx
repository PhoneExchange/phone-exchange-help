import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsUpDown } from "lucide-react";

export enum ArrowDirection {
  Up,
  Down,
  Left,
  Right,
  UpDown,
}

type Props = {
  colour?: string;
  size?: number;
  direction: ArrowDirection;
  className?: string;
};

export function ArrowChevronIcon({ colour, size, direction, className }: Props) {
  let IconComponent;

  switch (direction) {
    case ArrowDirection.Up:
      IconComponent = ChevronUp;
      break;
    case ArrowDirection.Down:
      IconComponent = ChevronDown;
      break;
    case ArrowDirection.Left:
      IconComponent = ChevronLeft;
      break;
    case ArrowDirection.Right:
      IconComponent = ChevronRight;
      break;
    case ArrowDirection.UpDown:
      IconComponent = ChevronsUpDown;
      break;
    default:
      IconComponent = ChevronRight;
  }

  return <IconComponent color={colour} size={size} className={className} />;
}

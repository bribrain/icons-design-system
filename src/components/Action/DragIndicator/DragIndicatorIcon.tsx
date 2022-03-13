import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDragIndicatorProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DragIndicatorIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDragIndicatorProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 14.3833C4 15.4833 3.1 16.3833 2 16.3833C0.9 16.3833 0 15.4833 0 14.3833C0 13.2833 0.9 12.3833 2 12.3833C3.1 12.3833 4 13.2833 4 14.3833ZM2 6.3833C0.9 6.3833 0 7.2833 0 8.3833C0 9.4833 0.9 10.3833 2 10.3833C3.1 10.3833 4 9.4833 4 8.3833C4 7.2833 3.1 6.3833 2 6.3833ZM2 0.383301C0.9 0.383301 0 1.2833 0 2.3833C0 3.4833 0.9 4.3833 2 4.3833C3.1 4.3833 4 3.4833 4 2.3833C4 1.2833 3.1 0.383301 2 0.383301ZM8 4.3833C9.1 4.3833 10 3.4833 10 2.3833C10 1.2833 9.1 0.383301 8 0.383301C6.9 0.383301 6 1.2833 6 2.3833C6 3.4833 6.9 4.3833 8 4.3833ZM8 6.3833C6.9 6.3833 6 7.2833 6 8.3833C6 9.4833 6.9 10.3833 8 10.3833C9.1 10.3833 10 9.4833 10 8.3833C10 7.2833 9.1 6.3833 8 6.3833ZM8 12.3833C6.9 12.3833 6 13.2833 6 14.3833C6 15.4833 6.9 16.3833 8 16.3833C9.1 16.3833 10 15.4833 10 14.3833C10 13.2833 9.1 12.3833 8 12.3833Z" fill={colorCode} />
    </svg>
  );
}
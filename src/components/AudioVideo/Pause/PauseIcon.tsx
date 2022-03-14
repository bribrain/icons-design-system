import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPauseIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PauseIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPauseIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 14.3833C3.1 14.3833 4 13.4833 4 12.3833V2.3833C4 1.2833 3.1 0.383301 2 0.383301C0.9 0.383301 0 1.2833 0 2.3833V12.3833C0 13.4833 0.9 14.3833 2 14.3833ZM8 2.3833V12.3833C8 13.4833 8.9 14.3833 10 14.3833C11.1 14.3833 12 13.4833 12 12.3833V2.3833C12 1.2833 11.1 0.383301 10 0.383301C8.9 0.383301 8 1.2833 8 2.3833Z" fill={colorCode} />
    </svg>
  );
}
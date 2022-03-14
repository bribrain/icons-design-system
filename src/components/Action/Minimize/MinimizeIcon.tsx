import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IMinimizeProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MinimizeIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IMinimizeProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 12 3"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M1 0.383301H11C11.55 0.383301 12 0.833301 12 1.3833C12 1.9333 11.55 2.3833 11 2.3833H1C0.45 2.3833 0 1.9333 0 1.3833C0 0.833301 0.45 0.383301 1 0.383301Z" fill={colorCode} />
    </svg>
  );
}
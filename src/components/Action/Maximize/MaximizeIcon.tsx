import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IMaximizeProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MaximizeIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IMaximizeProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 3"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M1 0.383301H17C17.55 0.383301 18 0.833301 18 1.3833C18 1.9333 17.55 2.3833 17 2.3833H1C0.45 2.3833 0 1.9333 0 1.3833C0 0.833301 0.45 0.383301 1 0.383301Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IViewStreamProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewStreamIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IViewStreamProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 13.3833H16C16.55 13.3833 17 12.9333 17 12.3833V8.3833C17 7.8333 16.55 7.3833 16 7.3833H1C0.45 7.3833 0 7.8333 0 8.3833V12.3833C0 12.9333 0.45 13.3833 1 13.3833ZM0 1.3833V5.3833C0 5.9333 0.45 6.3833 1 6.3833H16C16.55 6.3833 17 5.9333 17 5.3833V1.3833C17 0.833301 16.55 0.383301 16 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833Z" fill={colorCode} />
    </svg>
  );
}
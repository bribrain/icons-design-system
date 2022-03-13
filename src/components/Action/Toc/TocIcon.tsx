import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITocProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TocIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITocProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 2.3833H13C13.55 2.3833 14 1.9333 14 1.3833C14 0.833301 13.55 0.383301 13 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833C0 1.9333 0.45 2.3833 1 2.3833ZM1 6.3833H13C13.55 6.3833 14 5.9333 14 5.3833C14 4.8333 13.55 4.3833 13 4.3833H1C0.45 4.3833 0 4.8333 0 5.3833C0 5.9333 0.45 6.3833 1 6.3833ZM1 10.3833H13C13.55 10.3833 14 9.9333 14 9.3833C14 8.8333 13.55 8.3833 13 8.3833H1C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833ZM16 10.3833H18V8.3833H16V10.3833ZM16 0.383301V2.3833H18V0.383301H16ZM16 6.3833H18V4.3833H16V6.3833Z" fill={colorCode} />
    </svg>
  );
}
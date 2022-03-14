import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IGifProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function GifIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IGifProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.25 0.383301C7.66 0.383301 8 0.723301 8 1.1333V5.6333C8 6.0433 7.66 6.3833 7.25 6.3833C6.84 6.3833 6.5 6.0433 6.5 5.6333V1.1333C6.5 0.723301 6.84 0.383301 7.25 0.383301ZM5 1.1333C5 0.723301 4.66 0.383301 4.25 0.383301H1C0.4 0.383301 0 0.883301 0 1.3833V5.3833C0 5.8833 0.4 6.3833 1 6.3833H4C4.6 6.3833 5 5.8833 5 5.3833V4.1333C5 3.7233 4.66 3.3833 4.25 3.3833C3.84 3.3833 3.5 3.7233 3.5 4.1333V4.8833H1.5V1.8833H4.25C4.66 1.8833 5 1.5433 5 1.1333ZM14 1.1333C14 0.723301 13.66 0.383301 13.25 0.383301H10.5C9.95 0.383301 9.5 0.833301 9.5 1.3833V5.6333C9.5 6.0433 9.84 6.3833 10.25 6.3833C10.66 6.3833 11 6.0433 11 5.6333V4.3833H12.25C12.66 4.3833 13 4.0433 13 3.6333C13 3.2233 12.66 2.8833 12.25 2.8833H11V1.8833H13.25C13.66 1.8833 14 1.5433 14 1.1333Z" fill={colorCode} />
    </svg>
  );
}
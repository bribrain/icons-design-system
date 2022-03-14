import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISourceProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SourceIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISourceProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 2.3833H10L8.59 0.973301C8.21 0.593301 7.7 0.383301 7.17 0.383301H2C0.9 0.383301 0.00999999 1.2833 0.00999999 2.3833L0 14.3833C0 15.4833 0.9 16.3833 2 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V4.3833C20 3.2833 19.1 2.3833 18 2.3833ZM12 12.3833H4V10.3833H12V12.3833ZM16 8.3833H4V6.3833H16V8.3833Z" fill={colorCode} />
    </svg>
  );
}
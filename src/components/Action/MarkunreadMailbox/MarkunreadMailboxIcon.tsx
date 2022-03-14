import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IMarkunreadMailboxProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MarkunreadMailboxIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IMarkunreadMailboxProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M18 6.3833H8V11.3833C8 11.9333 7.55 12.3833 7 12.3833C6.45 12.3833 6 11.9333 6 11.3833V4.3833H11C11.55 4.3833 12 3.9333 12 3.3833V1.3833C12 0.833301 11.55 0.383301 11 0.383301H5C4.45 0.383301 4 0.833301 4 1.3833V6.3833H2C0.9 6.3833 0 7.2833 0 8.3833V20.3833C0 21.4833 0.9 22.3833 2 22.3833H18C19.1 22.3833 20 21.4833 20 20.3833V8.3833C20 7.2833 19.1 6.3833 18 6.3833Z" fill={colorCode} />
    </svg>
  );
}
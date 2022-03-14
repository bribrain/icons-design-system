import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IQuickreplyProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function QuickreplyIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IQuickreplyProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 2.3833C20 1.2833 19.1 0.383301 18 0.383301H2C0.9 0.383301 0.00999999 1.2833 0.00999999 2.3833L0 20.3833L4 16.3833H13V9.3833C13 8.8333 13.45 8.3833 14 8.3833H20V2.3833Z" fill={colorCode} />
      <path d="M19.69 14.3833H18.3L19.7 11.0833C19.84 10.7533 19.6 10.3833 19.24 10.3833H15.5C15.22 10.3833 15 10.6033 15 10.8833V15.8833C15 16.1633 15.22 16.3833 15.5 16.3833H17V20.3233C17 20.5833 17.36 20.6733 17.47 20.4333L20.13 15.1033C20.3 14.7733 20.06 14.3833 19.69 14.3833Z" fill={colorCode} />
    </svg>
  );
}
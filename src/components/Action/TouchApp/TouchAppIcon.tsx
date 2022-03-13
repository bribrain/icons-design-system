import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITouchAppProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TouchAppIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITouchAppProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.79 8.6233V4.8833C4.79 3.5033 5.91 2.3833 7.29 2.3833C8.67 2.3833 9.79 3.5033 9.79 4.8833V8.6233C11 7.8133 11.79 6.4433 11.79 4.8833C11.79 2.3933 9.78 0.383301 7.29 0.383301C4.8 0.383301 2.79 2.3933 2.79 4.8833C2.79 6.4433 3.58 7.8133 4.79 8.6233ZM10.29 11.0933C10.01 10.9533 9.71 10.8833 9.4 10.8833H8.79V4.8833C8.79 4.0533 8.12 3.3833 7.29 3.3833C6.46 3.3833 5.79 4.0533 5.79 4.8833V15.6233L2.35 14.9033C1.98 14.8233 1.59 14.9433 1.32 15.2133C0.89 15.6533 0.89 16.3533 1.32 16.7933L5.33 20.8033C5.71 21.1733 6.22 21.3833 6.75 21.3833H12.85C13.85 21.3833 14.69 20.6533 14.83 19.6633L15.46 15.1933C15.58 14.3433 15.14 13.5033 14.37 13.1233L10.29 11.0933Z" fill={colorCode} />
    </svg>
  );
}
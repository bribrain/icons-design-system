import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISwapVertProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SwapVertIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISwapVertProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 14.3933V8.38332C11 7.83332 10.55 7.38332 10 7.38332C9.45 7.38332 9 7.83332 9 8.38332V14.3933H7.21C6.76 14.3933 6.54 14.9333 6.86 15.2433L9.65 18.0233C9.85 18.2133 10.16 18.2133 10.36 18.0233L13.15 15.2433C13.47 14.9333 13.24 14.3933 12.8 14.3933H11ZM3.65 0.73332L0.86 3.52332C0.54 3.83332 0.76 4.37332 1.21 4.37332H3V10.3833C3 10.9333 3.45 11.3833 4 11.3833C4.55 11.3833 5 10.9333 5 10.3833V4.37332H6.79C7.24 4.37332 7.46 3.83332 7.14 3.52332L4.35 0.73332C4.16 0.54332 3.84 0.54332 3.65 0.73332Z" fill={colorCode} />
    </svg>
  );
}
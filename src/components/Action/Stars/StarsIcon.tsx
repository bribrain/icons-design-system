import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IStarsProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function StarsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IStarsProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.99 0.383301C4.47 0.383301 0 4.8633 0 10.3833C0 15.9033 4.47 20.3833 9.99 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 9.99 0.383301ZM13.22 15.7733L10 13.8333L6.78 15.7733C6.4 16.0033 5.93 15.6633 6.03 15.2333L6.88 11.5733L4.05 9.1233C3.72 8.8333 3.9 8.2833 4.34 8.2433L8.08 7.9233L9.54 4.4733C9.71 4.0633 10.29 4.0633 10.46 4.4733L11.92 7.9133L15.66 8.2333C16.1 8.2733 16.28 8.8233 15.94 9.1133L13.11 11.5633L13.96 15.2333C14.06 15.6633 13.6 16.0033 13.22 15.7733Z" fill={colorCode} />
    </svg>
  );
}
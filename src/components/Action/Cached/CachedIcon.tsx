import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICachedProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CachedIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICachedProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.65 4.7333L14.86 7.5233C14.54 7.8433 14.76 8.3833 15.21 8.3833H17C17 11.6933 14.31 14.3833 11 14.3833C10.21 14.3833 9.44 14.2333 8.75 13.9433C8.39 13.7933 7.98 13.9033 7.71 14.1733C7.2 14.6833 7.38 15.5433 8.05 15.8133C8.96 16.1833 9.96 16.3833 11 16.3833C15.42 16.3833 19 12.8033 19 8.3833H20.79C21.24 8.3833 21.46 7.8433 21.14 7.5333L18.35 4.7433C18.16 4.5433 17.84 4.5433 17.65 4.7333ZM5 8.3833C5 5.0733 7.69 2.3833 11 2.3833C11.79 2.3833 12.56 2.5333 13.25 2.8233C13.61 2.9733 14.02 2.8633 14.29 2.5933C14.8 2.0833 14.62 1.2233 13.95 0.953301C13.04 0.583301 12.04 0.383301 11 0.383301C6.58 0.383301 3 3.9633 3 8.3833H1.21C0.76 8.3833 0.54 8.9233 0.86 9.2333L3.65 12.0233C3.85 12.2233 4.16 12.2233 4.36 12.0233L7.15 9.2333C7.46 8.9233 7.24 8.3833 6.79 8.3833H5Z" fill={colorCode} />
    </svg>
  );
}
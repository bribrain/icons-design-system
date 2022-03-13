import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISwapHorizCircleProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SwapHorizCircleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISwapHorizCircleProps) {
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
      <path d="M20 10.3833C20 4.8633 15.52 0.383301 10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833ZM13 4.8833L16.15 8.0333C16.35 8.2333 16.35 8.5433 16.15 8.7433L13 11.8833V9.3833H9V7.3833H13V4.8833ZM7 15.8833L3.85 12.7333C3.65 12.5333 3.65 12.2233 3.85 12.0233L7 8.8833V11.3833H11V13.3833H7V15.8833Z" fill={colorCode} />
    </svg>
  );
}
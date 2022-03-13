import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISwapVerticalCircleProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SwapVerticalCircleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISwapVerticalCircleProps) {
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
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM4.5 7.3833L7.65 4.2333C7.85 4.0333 8.16 4.0333 8.36 4.2333L11.5 7.3833H9V11.3833H7V7.3833H4.5ZM12.35 16.5333C12.15 16.7333 11.84 16.7333 11.64 16.5333L8.5 13.3833H11V9.3833H13V13.3833H15.5L12.35 16.5333Z" fill={colorCode} />
    </svg>
  );
}
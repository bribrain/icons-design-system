import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IEcoProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function EcoIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IEcoProps) {
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
      <path d="M2.05 4.43334C-0.680001 7.16334 -0.680001 11.5833 2.03 14.3133C3.5 10.9133 6.12 8.07334 9.39 6.38334C6.62 8.72334 4.68 11.9933 4 15.7033C6.6 16.9333 9.8 16.4833 11.95 14.3333C14.94 11.3433 15.78 3.19334 15.96 0.953344C15.98 0.643344 15.73 0.393344 15.43 0.423344C13.19 0.603344 5.04 1.44334 2.05 4.43334Z" fill={colorCode} />
    </svg>
  );
}
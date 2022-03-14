import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFastForwardIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FastForwardIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFastForwardIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.58 10.2733L7.35 6.20332C7.91 5.80332 7.91 4.96332 7.35 4.57332L1.58 0.493323C0.91 0.0333227 0 0.503322 0 1.31332V9.45332C0 10.2633 0.91 10.7333 1.58 10.2733ZM9 1.31332V9.45332C9 10.2633 9.91 10.7333 10.58 10.2733L16.35 6.20332C16.91 5.80332 16.91 4.96332 16.35 4.57332L10.58 0.503322C9.91 0.0333224 9 0.503322 9 1.31332Z" fill={colorCode} />
    </svg>
  );
}
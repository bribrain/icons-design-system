import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFastRewindIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FastRewindIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFastRewindIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.99998 9.45332V1.31332C7.99998 0.503322 7.08998 0.0333227 6.41998 0.493323L0.64998 4.56332C0.0899805 4.96332 0.0899805 5.80332 0.64998 6.19332L6.41998 10.2633C7.08998 10.7333 7.99998 10.2633 7.99998 9.45332ZM9.65998 6.20332L15.43 10.2733C16.09 10.7433 17.01 10.2633 17.01 9.45332V1.31332C17.01 0.503322 16.1 0.0333227 15.43 0.493323L9.65998 4.56332C9.08998 4.96332 9.08998 5.80332 9.65998 6.20332Z" fill={colorCode} />
    </svg>
  );
}
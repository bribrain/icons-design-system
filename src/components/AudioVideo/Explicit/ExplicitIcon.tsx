import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IExplicitIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ExplicitIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IExplicitIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM11 6.3833H8V8.3833H11C11.55 8.3833 12 8.8333 12 9.3833C12 9.9333 11.55 10.3833 11 10.3833H8V12.3833H11C11.55 12.3833 12 12.8333 12 13.3833C12 13.9333 11.55 14.3833 11 14.3833H7C6.45 14.3833 6 13.9333 6 13.3833V5.3833C6 4.8333 6.45 4.3833 7 4.3833H11C11.55 4.3833 12 4.8333 12 5.3833C12 5.9333 11.55 6.3833 11 6.3833Z" fill={colorCode} />
    </svg>
  );
}
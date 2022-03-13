import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IArrowCircleDownProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ArrowCircleDownIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IArrowCircleDownProps) {
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
      <path d="M10 2.3833C14.41 2.3833 18 5.9733 18 10.3833C18 14.7933 14.41 18.3833 10 18.3833C5.59 18.3833 2 14.7933 2 10.3833C2 5.9733 5.59 2.3833 10 2.3833ZM10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM11 10.3833V7.3833C11 6.8333 10.55 6.3833 10 6.3833C9.45 6.3833 9 6.8333 9 7.3833V10.3833H7.21C6.76 10.3833 6.54 10.9233 6.86 11.2333L9.65 14.0233C9.85 14.2233 10.16 14.2233 10.36 14.0233L13.15 11.2333C13.46 10.9233 13.24 10.3833 12.8 10.3833H11Z" fill={colorCode} />
    </svg>
  );
}
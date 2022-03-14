import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFlipToBackProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlipToBackIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFlipToBackProps) {
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
      <path d="M6 4.3833H4V6.3833H6V4.3833ZM6 8.3833H4V10.3833H6V8.3833ZM6 0.383301C4.89 0.383301 4 1.2833 4 2.3833H6V0.383301ZM10 12.3833H8V14.3833H10V12.3833ZM16 0.383301V2.3833H18C18 1.2833 17.1 0.383301 16 0.383301ZM10 0.383301H8V2.3833H10V0.383301ZM6 14.3833V12.3833H4C4 13.4833 4.89 14.3833 6 14.3833ZM16 10.3833H18V8.3833H16V10.3833ZM16 6.3833H18V4.3833H16V6.3833ZM16 14.3833C17.1 14.3833 18 13.4833 18 12.3833H16V14.3833ZM1 4.3833C0.45 4.3833 0 4.8333 0 5.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H13C13.55 18.3833 14 17.9333 14 17.3833C14 16.8333 13.55 16.3833 13 16.3833H3C2.45 16.3833 2 15.9333 2 15.3833V5.3833C2 4.8333 1.55 4.3833 1 4.3833ZM12 2.3833H14V0.383301H12V2.3833ZM12 14.3833H14V12.3833H12V14.3833Z" fill={colorCode} />
    </svg>
  );
}
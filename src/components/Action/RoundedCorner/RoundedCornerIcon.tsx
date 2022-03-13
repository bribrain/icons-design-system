import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRoundedCornerProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RoundedCornerIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRoundedCornerProps) {
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
      <path d="M16 16.3833H18V18.3833H16V16.3833ZM16 14.3833H18V12.3833H16V14.3833ZM0 10.3833H2V8.3833H0V10.3833ZM0 14.3833H2V12.3833H0V14.3833ZM0 6.3833H2V4.3833H0V6.3833ZM0 2.3833H2V0.383301H0V2.3833ZM4 2.3833H6V0.383301H4V2.3833ZM12 18.3833H14V16.3833H12V18.3833ZM8 18.3833H10V16.3833H8V18.3833ZM12 18.3833H14V16.3833H12V18.3833ZM4 18.3833H6V16.3833H4V18.3833ZM0 18.3833H2V16.3833H0V18.3833ZM18 5.3833C18 2.6233 15.76 0.383301 13 0.383301H8V2.3833H13C14.65 2.3833 16 3.7333 16 5.3833V10.3833H18V5.3833Z" fill={colorCode} />
    </svg>
  );
}
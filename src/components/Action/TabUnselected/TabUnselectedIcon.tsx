import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITabUnselectedProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TabUnselectedIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITabUnselectedProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 6.3833H2V4.3833H0V6.3833ZM0 10.3833H2V8.3833H0V10.3833ZM0 2.3833H2V0.383301C0.9 0.383301 0 1.2833 0 2.3833ZM8 18.3833H10V16.3833H8V18.3833ZM0 14.3833H2V12.3833H0V14.3833ZM2 18.3833V16.3833H0C0 17.4833 0.9 18.3833 2 18.3833ZM20 0.383301H12V5.3833C12 5.9333 12.45 6.3833 13 6.3833H22V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM20 14.3833H22V12.3833H20V14.3833ZM8 2.3833H10V0.383301H8V2.3833ZM4 18.3833H6V16.3833H4V18.3833ZM4 2.3833H6V0.383301H4V2.3833ZM20 18.3833C21.1 18.3833 22 17.4833 22 16.3833H20V18.3833ZM20 10.3833H22V8.3833H20V10.3833ZM12 18.3833H14V16.3833H12V18.3833ZM16 18.3833H18V16.3833H16V18.3833Z" fill={colorCode} />
    </svg>
  );
}
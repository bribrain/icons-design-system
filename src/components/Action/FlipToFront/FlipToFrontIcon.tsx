import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFlipToFrontProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlipToFrontIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFlipToFrontProps) {
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
      <path d="M0 10.3833H2V8.3833H0V10.3833ZM0 14.3833H2V12.3833H0V14.3833ZM2 18.3833V16.3833H0C0 17.4833 0.89 18.3833 2 18.3833ZM0 6.3833H2V4.3833H0V6.3833ZM12 18.3833H14V16.3833H12V18.3833ZM16 0.383301H6C4.89 0.383301 4 1.2833 4 2.3833V12.3833C4 13.4833 4.89 14.3833 6 14.3833H16C17.1 14.3833 18 13.4833 18 12.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM15 12.3833H7C6.45 12.3833 6 11.9333 6 11.3833V3.3833C6 2.8333 6.45 2.3833 7 2.3833H15C15.55 2.3833 16 2.8333 16 3.3833V11.3833C16 11.9333 15.55 12.3833 15 12.3833ZM8 18.3833H10V16.3833H8V18.3833ZM4 18.3833H6V16.3833H4V18.3833Z" fill={colorCode} />
    </svg>
  );
}
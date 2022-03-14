import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IStickyNote2Props {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function StickyNote2Icon({
  size = 24,
  rotate = 0,
  color = "black",
}: IStickyNote2Props) {
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
      <path d="M16 0.383301H1.99C0.89 0.383301 0 1.2833 0 2.3833L0.00999999 16.3833C0.00999999 17.4833 0.9 18.3833 2 18.3833H12L18 12.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM5 5.3833H13C13.55 5.3833 14 5.8333 14 6.3833C14 6.9333 13.55 7.3833 13 7.3833H5C4.45 7.3833 4 6.9333 4 6.3833C4 5.8333 4.45 5.3833 5 5.3833ZM8 11.3833H5C4.45 11.3833 4 10.9333 4 10.3833C4 9.8333 4.45 9.3833 5 9.3833H8C8.55 9.3833 9 9.8333 9 10.3833C9 10.9333 8.55 11.3833 8 11.3833ZM11 16.8833V12.3833C11 11.8333 11.45 11.3833 12 11.3833H16.5L11 16.8833Z" fill={colorCode} />
    </svg>
  );
}
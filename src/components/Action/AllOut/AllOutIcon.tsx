import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAllOutIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AllOutIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAllOutIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.883301V4.3833L4 0.383301H0.5C0.22 0.383301 0 0.603301 0 0.883301ZM12 0.383301L16 4.3833V0.883301C16 0.603301 15.78 0.383301 15.5 0.383301H12ZM16 15.8833V12.3833L12 16.3833H15.5C15.78 16.3833 16 16.1633 16 15.8833ZM0.5 16.3833H4L0 12.3833V15.8833C0 16.1633 0.22 16.3833 0.5 16.3833ZM15 8.3833C15 4.5133 11.87 1.3833 8 1.3833C4.13 1.3833 1 4.5133 1 8.3833C1 12.2533 4.13 15.3833 8 15.3833C11.87 15.3833 15 12.2533 15 8.3833ZM8 13.3833C5.24 13.3833 3 11.1433 3 8.3833C3 5.6233 5.24 3.3833 8 3.3833C10.76 3.3833 13 5.6233 13 8.3833C13 11.1433 10.76 13.3833 8 13.3833Z" fill={colorCode} />
    </svg>
  );
}
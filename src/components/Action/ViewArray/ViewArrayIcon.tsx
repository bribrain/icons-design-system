import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IViewArrayProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewArrayIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IViewArrayProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 13.3833H2C2.55 13.3833 3 12.9333 3 12.3833V1.3833C3 0.833301 2.55 0.383301 2 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V12.3833C0 12.9333 0.45 13.3833 1 13.3833ZM14 1.3833V12.3833C14 12.9333 14.45 13.3833 15 13.3833H16C16.55 13.3833 17 12.9333 17 12.3833V1.3833C17 0.833301 16.55 0.383301 16 0.383301H15C14.45 0.383301 14 0.833301 14 1.3833ZM5 13.3833H12C12.55 13.3833 13 12.9333 13 12.3833V1.3833C13 0.833301 12.55 0.383301 12 0.383301H5C4.45 0.383301 4 0.833301 4 1.3833V12.3833C4 12.9333 4.45 13.3833 5 13.3833Z" fill={colorCode} />
    </svg>
  );
}
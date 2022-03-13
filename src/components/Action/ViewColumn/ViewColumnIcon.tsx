import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IViewColumnProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewColumnIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IViewColumnProps) {
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
      <path d="M7 13.3833H10C10.55 13.3833 11 12.9333 11 12.3833V1.3833C11 0.833301 10.55 0.383301 10 0.383301H7C6.45 0.383301 6 0.833301 6 1.3833V12.3833C6 12.9333 6.45 13.3833 7 13.3833ZM1 13.3833H4C4.55 13.3833 5 12.9333 5 12.3833V1.3833C5 0.833301 4.55 0.383301 4 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V12.3833C0 12.9333 0.45 13.3833 1 13.3833ZM12 1.3833V12.3833C12 12.9333 12.45 13.3833 13 13.3833H16C16.55 13.3833 17 12.9333 17 12.3833V1.3833C17 0.833301 16.55 0.383301 16 0.383301H13C12.45 0.383301 12 0.833301 12 1.3833Z" fill={colorCode} />
    </svg>
  );
}
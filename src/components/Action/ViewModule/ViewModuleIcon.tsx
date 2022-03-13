import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IViewModuleProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewModuleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IViewModuleProps) {
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
      <path d="M1 6.3833H4C4.55 6.3833 5 5.9333 5 5.3833V1.3833C5 0.833301 4.55 0.383301 4 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V5.3833C0 5.9333 0.45 6.3833 1 6.3833ZM1 13.3833H4C4.55 13.3833 5 12.9333 5 12.3833V8.3833C5 7.8333 4.55 7.3833 4 7.3833H1C0.45 7.3833 0 7.8333 0 8.3833V12.3833C0 12.9333 0.45 13.3833 1 13.3833ZM7 13.3833H10C10.55 13.3833 11 12.9333 11 12.3833V8.3833C11 7.8333 10.55 7.3833 10 7.3833H7C6.45 7.3833 6 7.8333 6 8.3833V12.3833C6 12.9333 6.45 13.3833 7 13.3833ZM13 13.3833H16C16.55 13.3833 17 12.9333 17 12.3833V8.3833C17 7.8333 16.55 7.3833 16 7.3833H13C12.45 7.3833 12 7.8333 12 8.3833V12.3833C12 12.9333 12.45 13.3833 13 13.3833ZM7 6.3833H10C10.55 6.3833 11 5.9333 11 5.3833V1.3833C11 0.833301 10.55 0.383301 10 0.383301H7C6.45 0.383301 6 0.833301 6 1.3833V5.3833C6 5.9333 6.45 6.3833 7 6.3833ZM12 1.3833V5.3833C12 5.9333 12.45 6.3833 13 6.3833H16C16.55 6.3833 17 5.9333 17 5.3833V1.3833C17 0.833301 16.55 0.383301 16 0.383301H13C12.45 0.383301 12 0.833301 12 1.3833Z" fill={colorCode} />
    </svg>
  );
}
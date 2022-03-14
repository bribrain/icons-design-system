import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVisibilityProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VisibilityIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVisibilityProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 0.383301C6 0.383301 1.73 3.4933 0 7.8833C1.73 12.2733 6 15.3833 11 15.3833C16 15.3833 20.27 12.2733 22 7.8833C20.27 3.4933 16 0.383301 11 0.383301ZM11 12.8833C8.24 12.8833 6 10.6433 6 7.8833C6 5.1233 8.24 2.8833 11 2.8833C13.76 2.8833 16 5.1233 16 7.8833C16 10.6433 13.76 12.8833 11 12.8833ZM11 4.8833C9.34 4.8833 8 6.2233 8 7.8833C8 9.5433 9.34 10.8833 11 10.8833C12.66 10.8833 14 9.5433 14 7.8833C14 6.2233 12.66 4.8833 11 4.8833Z" fill={colorCode} />
    </svg>
  );
}
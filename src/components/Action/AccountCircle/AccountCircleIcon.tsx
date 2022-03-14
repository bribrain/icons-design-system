import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAccountCircleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AccountCircleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAccountCircleIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM10 3.3833C11.66 3.3833 13 4.7233 13 6.3833C13 8.0433 11.66 9.3833 10 9.3833C8.34 9.3833 7 8.0433 7 6.3833C7 4.7233 8.34 3.3833 10 3.3833ZM10 17.5833C7.5 17.5833 5.29 16.3033 4 14.3633C4.03 12.3733 8 11.2833 10 11.2833C11.99 11.2833 15.97 12.3733 16 14.3633C14.71 16.3033 12.5 17.5833 10 17.5833Z" fill={colorCode} />
    </svg>
  );
}
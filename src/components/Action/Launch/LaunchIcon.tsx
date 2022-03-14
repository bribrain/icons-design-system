import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILaunchProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LaunchIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILaunchProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M15 16.3833H3C2.45 16.3833 2 15.9333 2 15.3833V3.3833C2 2.8333 2.45 2.3833 3 2.3833H8C8.55 2.3833 9 1.9333 9 1.3833C9 0.833301 8.55 0.383301 8 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V10.3833C18 9.8333 17.55 9.3833 17 9.3833C16.45 9.3833 16 9.8333 16 10.3833V15.3833C16 15.9333 15.55 16.3833 15 16.3833ZM11 1.3833C11 1.9333 11.45 2.3833 12 2.3833H14.59L5.46 11.5133C5.07 11.9033 5.07 12.5333 5.46 12.9233C5.85 13.3133 6.48 13.3133 6.87 12.9233L16 3.7933V6.3833C16 6.9333 16.45 7.3833 17 7.3833C17.55 7.3833 18 6.9333 18 6.3833V0.383301H12C11.45 0.383301 11 0.833301 11 1.3833Z" fill={colorCode} />
    </svg>
  );
}
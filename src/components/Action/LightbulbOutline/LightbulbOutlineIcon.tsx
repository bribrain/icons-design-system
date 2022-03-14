import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILightbulbOutlineProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LightbulbOutlineIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILightbulbOutlineProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 21"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M4 19.3833C4 19.9333 4.45 20.3833 5 20.3833H9C9.55 20.3833 10 19.9333 10 19.3833V18.3833H4V19.3833ZM7 0.383301C3.14 0.383301 0 3.5233 0 7.3833C0 9.7633 1.19 11.8533 3 13.1233V15.3833C3 15.9333 3.45 16.3833 4 16.3833H10C10.55 16.3833 11 15.9333 11 15.3833V13.1233C12.81 11.8533 14 9.7633 14 7.3833C14 3.5233 10.86 0.383301 7 0.383301ZM9.85 11.4833L9 12.0833V14.3833H5V12.0833L4.15 11.4833C2.8 10.5433 2 9.0133 2 7.3833C2 4.6233 4.24 2.3833 7 2.3833C9.76 2.3833 12 4.6233 12 7.3833C12 9.0133 11.2 10.5433 9.85 11.4833Z" fill={colorCode} />
    </svg>
  );
}
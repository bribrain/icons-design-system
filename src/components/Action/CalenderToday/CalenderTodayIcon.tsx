import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICalenderTodayProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CalenderTodayIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICalenderTodayProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 2.3833H17V1.3833C17 0.833301 16.55 0.383301 16 0.383301C15.45 0.383301 15 0.833301 15 1.3833V2.3833H5V1.3833C5 0.833301 4.55 0.383301 4 0.383301C3.45 0.383301 3 0.833301 3 1.3833V2.3833H2C0.9 2.3833 0 3.2833 0 4.3833V20.3833C0 21.4833 0.9 22.3833 2 22.3833H18C19.1 22.3833 20 21.4833 20 20.3833V4.3833C20 3.2833 19.1 2.3833 18 2.3833ZM17 20.3833H3C2.45 20.3833 2 19.9333 2 19.3833V7.3833H18V19.3833C18 19.9333 17.55 20.3833 17 20.3833Z" fill={colorCode} />
    </svg>
  );
}
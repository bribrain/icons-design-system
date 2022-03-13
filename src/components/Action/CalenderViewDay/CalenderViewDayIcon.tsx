import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICalenderViewDayProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CalenderViewDayIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICalenderViewDayProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 11.3833H17C17.55 11.3833 18 11.8333 18 12.3833C18 12.9333 17.55 13.3833 17 13.3833H1C0.45 13.3833 0 12.9333 0 12.3833C0 11.8333 0.45 11.3833 1 11.3833ZM1 4.3833H17C17.55 4.3833 18 4.8333 18 5.3833V8.3833C18 8.9333 17.55 9.3833 17 9.3833H1C0.45 9.3833 0 8.9333 0 8.3833V5.3833C0 4.8333 0.45 4.3833 1 4.3833ZM1 0.383301H17C17.55 0.383301 18 0.833301 18 1.3833C18 1.9333 17.55 2.3833 17 2.3833H1C0.45 2.3833 0 1.9333 0 1.3833C0 0.833301 0.45 0.383301 1 0.383301Z" fill={colorCode} />
    </svg>
  );
}
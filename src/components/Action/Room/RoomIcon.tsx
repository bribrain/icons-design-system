import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRoomProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RoomIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRoomProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 0.383301C3.13 0.383301 0 3.5133 0 7.3833C0 11.5533 4.42 17.3033 6.24 19.4933C6.64 19.9733 7.37 19.9733 7.77 19.4933C9.58 17.3033 14 11.5533 14 7.3833C14 3.5133 10.87 0.383301 7 0.383301ZM7 9.8833C5.62 9.8833 4.5 8.7633 4.5 7.3833C4.5 6.0033 5.62 4.8833 7 4.8833C8.38 4.8833 9.5 6.0033 9.5 7.3833C9.5 8.7633 8.38 9.8833 7 9.8833Z" fill={colorCode} />
    </svg>
  );
}
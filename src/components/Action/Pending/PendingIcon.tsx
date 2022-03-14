import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPendingProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PendingIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPendingProps) {
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
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM5 11.8833C4.17 11.8833 3.5 11.2133 3.5 10.3833C3.5 9.5533 4.17 8.8833 5 8.8833C5.83 8.8833 6.5 9.5533 6.5 10.3833C6.5 11.2133 5.83 11.8833 5 11.8833ZM10 11.8833C9.17 11.8833 8.5 11.2133 8.5 10.3833C8.5 9.5533 9.17 8.8833 10 8.8833C10.83 8.8833 11.5 9.5533 11.5 10.3833C11.5 11.2133 10.83 11.8833 10 11.8833ZM15 11.8833C14.17 11.8833 13.5 11.2133 13.5 10.3833C13.5 9.5533 14.17 8.8833 15 8.8833C15.83 8.8833 16.5 9.5533 16.5 10.3833C16.5 11.2133 15.83 11.8833 15 11.8833Z" fill={colorCode} />
    </svg>
  );
}
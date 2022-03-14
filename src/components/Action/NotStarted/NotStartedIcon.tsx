import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface INotStartedProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NotStartedIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: INotStartedProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM9 13.3833C9 13.9333 8.55 14.3833 8 14.3833C7.45 14.3833 7 13.9333 7 13.3833V7.3833C7 6.8333 7.45 6.3833 8 6.3833C8.55 6.3833 9 6.8333 9 7.3833V13.3833ZM14.02 11.1633L11.62 13.0833C10.97 13.6033 10 13.1433 10 12.3033V8.4633C10 7.6233 10.97 7.1633 11.62 7.6833L14.02 9.6033C14.52 10.0033 14.52 10.7633 14.02 11.1633Z" fill={colorCode} />
    </svg>
  );
}
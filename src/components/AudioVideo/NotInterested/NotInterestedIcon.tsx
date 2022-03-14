import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface INotInterestedIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NotInterestedIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: INotInterestedIconProps) {
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
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM10 18.3833C5.58 18.3833 2 14.8033 2 10.3833C2 8.5333 2.63 6.8333 3.69 5.4833L14.9 16.6933C13.55 17.7533 11.85 18.3833 10 18.3833ZM16.31 15.2833L5.1 4.0733C6.45 3.0133 8.15 2.3833 10 2.3833C14.42 2.3833 18 5.9633 18 10.3833C18 12.2333 17.37 13.9333 16.31 15.2833Z" fill={colorCode} />
    </svg>
  );
}
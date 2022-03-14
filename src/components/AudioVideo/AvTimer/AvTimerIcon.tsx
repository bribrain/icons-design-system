import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAvTimerIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AvTimerIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAvTimerIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 18.3833C12.5523 18.3833 13 17.9356 13 17.3833C13 16.831 12.5523 16.3833 12 16.3833C11.4477 16.3833 11 16.831 11 17.3833C11 17.9356 11.4477 18.3833 12 18.3833Z" fill={colorCode} />
      <path d="M7 13.3833C7.55228 13.3833 8 12.9356 8 12.3833C8 11.831 7.55228 11.3833 7 11.3833C6.44772 11.3833 6 11.831 6 12.3833C6 12.9356 6.44772 13.3833 7 13.3833Z" fill={colorCode} />
      <path d="M17 13.3833C17.5523 13.3833 18 12.9356 18 12.3833C18 11.831 17.5523 11.3833 17 11.3833C16.4477 11.3833 16 11.831 16 12.3833C16 12.9356 16.4477 13.3833 17 13.3833Z" fill={colorCode} />
      <path d="M12 3.3833C11.45 3.3833 11 3.8333 11 4.3833V6.3833C11 6.9333 11.45 7.3833 12 7.3833C12.55 7.3833 13 6.9333 13 6.3833V5.4633C16.31 5.9433 18.87 8.7133 19 12.1233C19.14 15.9733 15.97 19.3233 12.12 19.3833C8.19 19.4433 5 16.2933 5 12.3833C5 10.7033 5.59 9.1633 6.58 7.9633L11.29 12.6833C11.68 13.0733 12.31 13.0733 12.7 12.6833C13.09 12.2933 13.09 11.6633 12.7 11.2733L7.26 5.8433C6.88 5.4633 6.26 5.4533 5.86 5.8233C4.1 7.4533 3 9.7833 3 12.3833C3 17.4233 7.14 21.5033 12.21 21.3833C16.91 21.2733 20.84 17.3733 20.99 12.6733C21.16 7.5733 17.07 3.3833 12 3.3833Z" fill={colorCode} />
    </svg>
  );
}
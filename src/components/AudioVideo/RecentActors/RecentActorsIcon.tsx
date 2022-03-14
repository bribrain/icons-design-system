import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRecentActorsIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RecentActorsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRecentActorsIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 1.3833V13.3833C20 13.9333 20.45 14.3833 21 14.3833C21.55 14.3833 22 13.9333 22 13.3833V1.3833C22 0.833301 21.55 0.383301 21 0.383301C20.45 0.383301 20 0.833301 20 1.3833ZM17 14.3833C17.55 14.3833 18 13.9333 18 13.3833V1.3833C18 0.833301 17.55 0.383301 17 0.383301C16.45 0.383301 16 0.833301 16 1.3833V13.3833C16 13.9333 16.45 14.3833 17 14.3833ZM13 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V13.3833C0 13.9333 0.45 14.3833 1 14.3833H13C13.55 14.3833 14 13.9333 14 13.3833V1.3833C14 0.833301 13.55 0.383301 13 0.383301ZM7 3.1333C8.24 3.1333 9.25 4.1433 9.25 5.3833C9.25 6.6233 8.24 7.6333 7 7.6333C5.76 7.6333 4.75 6.6233 4.75 5.3833C4.75 4.1433 5.76 3.1333 7 3.1333ZM11.5 12.3833H2.5V11.6333C2.5 10.1333 5.5 9.3833 7 9.3833C8.5 9.3833 11.5 10.1333 11.5 11.6333V12.3833Z" fill={colorCode} />
    </svg>
  );
}
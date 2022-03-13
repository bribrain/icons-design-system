import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILeaderboardProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LeaderboardIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILeaderboardProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M4.5 18.3833H1C0.45 18.3833 0 17.9333 0 17.3833V7.3833C0 6.8333 0.45 6.3833 1 6.3833H4.5C5.05 6.3833 5.5 6.8333 5.5 7.3833V17.3833C5.5 17.9333 5.05 18.3833 4.5 18.3833ZM11.75 0.383301H8.25C7.7 0.383301 7.25 0.833301 7.25 1.3833V17.3833C7.25 17.9333 7.7 18.3833 8.25 18.3833H11.75C12.3 18.3833 12.75 17.9333 12.75 17.3833V1.3833C12.75 0.833301 12.3 0.383301 11.75 0.383301ZM19 8.3833H15.5C14.95 8.3833 14.5 8.8333 14.5 9.3833V17.3833C14.5 17.9333 14.95 18.3833 15.5 18.3833H19C19.55 18.3833 20 17.9333 20 17.3833V9.3833C20 8.8333 19.55 8.3833 19 8.3833Z" fill={colorCode} />
    </svg>
  );
}
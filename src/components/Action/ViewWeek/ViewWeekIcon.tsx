import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IViewWeekProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewWeekIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IViewWeekProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V13.3833C0 13.9333 0.45 14.3833 1 14.3833H4C4.55 14.3833 5 13.9333 5 13.3833V1.3833C5 0.833301 4.55 0.383301 4 0.383301ZM18 0.383301H15C14.45 0.383301 14 0.833301 14 1.3833V13.3833C14 13.9333 14.45 14.3833 15 14.3833H18C18.55 14.3833 19 13.9333 19 13.3833V1.3833C19 0.833301 18.55 0.383301 18 0.383301ZM11 0.383301H8C7.45 0.383301 7 0.833301 7 1.3833V13.3833C7 13.9333 7.45 14.3833 8 14.3833H11C11.55 14.3833 12 13.9333 12 13.3833V1.3833C12 0.833301 11.55 0.383301 11 0.383301Z" fill={colorCode} />
    </svg>
  );
}
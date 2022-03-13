import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDashboardProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DashboardIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDashboardProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 10.3833H7C7.55 10.3833 8 9.9333 8 9.3833V1.3833C8 0.833301 7.55 0.383301 7 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V9.3833C0 9.9333 0.45 10.3833 1 10.3833ZM1 18.3833H7C7.55 18.3833 8 17.9333 8 17.3833V13.3833C8 12.8333 7.55 12.3833 7 12.3833H1C0.45 12.3833 0 12.8333 0 13.3833V17.3833C0 17.9333 0.45 18.3833 1 18.3833ZM11 18.3833H17C17.55 18.3833 18 17.9333 18 17.3833V9.3833C18 8.8333 17.55 8.3833 17 8.3833H11C10.45 8.3833 10 8.8333 10 9.3833V17.3833C10 17.9333 10.45 18.3833 11 18.3833ZM10 1.3833V5.3833C10 5.9333 10.45 6.3833 11 6.3833H17C17.55 6.3833 18 5.9333 18 5.3833V1.3833C18 0.833301 17.55 0.383301 17 0.383301H11C10.45 0.383301 10 0.833301 10 1.3833Z" fill={colorCode} />
    </svg>
  );
}
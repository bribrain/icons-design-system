import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IViewDayProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewDayIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IViewDayProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 18.3833H18C18.55 18.3833 19 17.9333 19 17.3833V16.3833C19 15.8333 18.55 15.3833 18 15.3833H1C0.45 15.3833 0 15.8333 0 16.3833V17.3833C0 17.9333 0.45 18.3833 1 18.3833ZM18 5.3833H1C0.45 5.3833 0 5.8333 0 6.3833V12.3833C0 12.9333 0.45 13.3833 1 13.3833H18C18.55 13.3833 19 12.9333 19 12.3833V6.3833C19 5.8333 18.55 5.3833 18 5.3833ZM0 1.3833V2.3833C0 2.9333 0.45 3.3833 1 3.3833H18C18.55 3.3833 19 2.9333 19 2.3833V1.3833C19 0.833301 18.55 0.383301 18 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITodayProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TodayIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITodayProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2.3833H15V1.3833C15 0.833301 14.55 0.383301 14 0.383301C13.45 0.383301 13 0.833301 13 1.3833V2.3833H5V1.3833C5 0.833301 4.55 0.383301 4 0.383301C3.45 0.383301 3 0.833301 3 1.3833V2.3833H2C0.89 2.3833 0.00999999 3.2833 0.00999999 4.3833L0 18.3833C0 19.4833 0.89 20.3833 2 20.3833H16C17.1 20.3833 18 19.4833 18 18.3833V4.3833C18 3.2833 17.1 2.3833 16 2.3833ZM15 18.3833H3C2.45 18.3833 2 17.9333 2 17.3833V7.3833H16V17.3833C16 17.9333 15.55 18.3833 15 18.3833ZM5 9.3833H8C8.55 9.3833 9 9.8333 9 10.3833V13.3833C9 13.9333 8.55 14.3833 8 14.3833H5C4.45 14.3833 4 13.9333 4 13.3833V10.3833C4 9.8333 4.45 9.3833 5 9.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITourProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TourIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITourProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.45 3.7533C15.71 3.0933 15.23 2.3833 14.52 2.3833H8H7H2V1.3833C2 0.833301 1.55 0.383301 1 0.383301C0.45 0.383301 0 0.833301 0 1.3833V2.3833V12.3833V20.3833H2V12.3833H6H7H14.52C15.23 12.3833 15.71 11.6733 15.45 11.0133L14 7.3833L15.45 3.7533ZM10 7.3833C10 8.4833 9.1 9.3833 8 9.3833C6.9 9.3833 6 8.4833 6 7.3833C6 6.2833 6.9 5.3833 8 5.3833C9.1 5.3833 10 6.2833 10 7.3833Z" fill={colorCode} />
    </svg>
  );
}
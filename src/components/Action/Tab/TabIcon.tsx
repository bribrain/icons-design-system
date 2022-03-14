import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITabProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TabIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITabProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H20C21.1 18.3833 22 17.4833 22 16.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM19 16.3833H3C2.45 16.3833 2 15.9333 2 15.3833V3.3833C2 2.8333 2.45 2.3833 3 2.3833H12V5.3833C12 5.9333 12.45 6.3833 13 6.3833H20V15.3833C20 15.9333 19.55 16.3833 19 16.3833Z" fill={colorCode} />
    </svg>
  );
}
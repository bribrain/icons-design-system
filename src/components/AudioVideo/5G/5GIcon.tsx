import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface I5GIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FiveGIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: I5GIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 6.3833H16V8.3833H11V2.3833H17C17.55 2.3833 18 1.9333 18 1.3833C18 0.833301 17.55 0.383301 17 0.383301H11C9.9 0.383301 9 1.2833 9 2.3833V8.3833C9 9.4833 9.9 10.3833 11 10.3833H16C17.1 10.3833 18 9.4833 18 8.3833V5.3833C18 4.8333 17.55 4.3833 17 4.3833H15C14.45 4.3833 14 4.8333 14 5.3833C14 5.9333 14.45 6.3833 15 6.3833Z" fill={colorCode} />
      <path d="M1 6.3833H5V8.3833H1C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833H5C6.1 10.3833 7 9.4833 7 8.3833V6.3833C7 5.2833 6.1 4.3833 5 4.3833H2V2.3833H6C6.55 2.3833 7 1.9333 7 1.3833C7 0.833301 6.55 0.383301 6 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V5.3833C0 5.9333 0.45 6.3833 1 6.3833Z" fill={colorCode} />
    </svg>

  );
}
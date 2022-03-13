import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAccessibleForwardIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AccessibleForwardIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAccessibleForwardIconProps) {
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
      <path d="M10 10.3833H8C8 12.0333 6.65 13.3833 5 13.3833C3.35 13.3833 2 12.0333 2 10.3833C2 8.7333 3.35 7.3833 5 7.3833V5.3833C2.24 5.3833 0 7.6233 0 10.3833C0 13.1433 2.24 15.3833 5 15.3833C7.76 15.3833 10 13.1433 10 10.3833ZM13 6.8833H11.14L12.81 3.2133C13.42 1.8833 12.44 0.383301 10.96 0.383301H5.76C4.95 0.383301 4.22 0.853301 3.89 1.5833L3.61 2.3433C3.4 2.9033 3.72 3.5133 4.29 3.6733C4.78 3.8133 5.29 3.5633 5.49 3.0933L5.79 2.3833H8L6.17 6.4833C5.57 7.8133 6.56 9.3833 8.02 9.3833H13V13.3833C13 13.9333 13.45 14.3833 14 14.3833C14.55 14.3833 15 13.9333 15 13.3833V8.8833C15 7.7833 14.1 6.8833 13 6.8833Z" fill={colorCode} />
    </svg>
  );
}
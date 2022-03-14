import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IEqualizerIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function EqualizerIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IEqualizerIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 16.3833C9.1 16.3833 10 15.4833 10 14.3833V2.3833C10 1.2833 9.1 0.383301 8 0.383301C6.9 0.383301 6 1.2833 6 2.3833V14.3833C6 15.4833 6.9 16.3833 8 16.3833ZM2 16.3833C3.1 16.3833 4 15.4833 4 14.3833V10.3833C4 9.2833 3.1 8.3833 2 8.3833C0.9 8.3833 0 9.2833 0 10.3833V14.3833C0 15.4833 0.9 16.3833 2 16.3833ZM12 7.3833V14.3833C12 15.4833 12.9 16.3833 14 16.3833C15.1 16.3833 16 15.4833 16 14.3833V7.3833C16 6.2833 15.1 5.3833 14 5.3833C12.9 5.3833 12 6.2833 12 7.3833Z" fill={colorCode} />
    </svg>
  );
}
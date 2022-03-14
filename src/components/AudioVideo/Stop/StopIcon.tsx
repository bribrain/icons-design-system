import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IStopIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function StopIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IStopIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 0.383301H10C11.1 0.383301 12 1.2833 12 2.3833V10.3833C12 11.4833 11.1 12.3833 10 12.3833H2C0.9 12.3833 0 11.4833 0 10.3833V2.3833C0 1.2833 0.9 0.383301 2 0.383301Z" fill={colorCode} />
    </svg>
  );
}
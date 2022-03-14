import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IOpenInFullProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function OpenInFullIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IOpenInFullProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M18 5.9733V1.3833C18 0.833301 17.55 0.383301 17 0.383301H12.41C11.52 0.383301 11.07 1.4633 11.7 2.0933L13.29 3.6833L3.29 13.6833L1.7 12.0933C1.08 11.4633 0 11.9033 0 12.7933V17.3833C0 17.9333 0.45 18.3833 1 18.3833H5.59C6.48 18.3833 6.93 17.3033 6.3 16.6733L4.71 15.0833L14.71 5.0833L16.3 6.6733C16.92 7.3033 18 6.8633 18 5.9733Z" fill={colorCode} />
    </svg>
  );
}
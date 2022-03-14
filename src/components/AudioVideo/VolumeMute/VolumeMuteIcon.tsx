import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVolumeMuteIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VolumeMuteIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVolumeMuteIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 5.38332V9.38332C0 9.93332 0.45 10.3833 1 10.3833H4L7.29 13.6733C7.92 14.3033 9 13.8533 9 12.9633V1.79332C9 0.903318 7.92 0.453318 7.29 1.08332L4 4.38332H1C0.45 4.38332 0 4.83332 0 5.38332Z" fill={colorCode} />
    </svg>
  );
}
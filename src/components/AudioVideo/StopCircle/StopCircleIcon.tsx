import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IStopCircleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function StopCircleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IStopCircleIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.3833H13C13.55 14.3833 14 13.9333 14 13.3833V7.3833C14 6.8333 13.55 6.3833 13 6.3833H7C6.45 6.3833 6 6.8333 6 7.3833V13.3833C6 13.9333 6.45 14.3833 7 14.3833ZM10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301Z" fill={colorCode} />
    </svg>
  );
}
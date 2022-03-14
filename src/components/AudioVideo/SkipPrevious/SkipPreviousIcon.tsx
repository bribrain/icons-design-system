import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISkipPreviousIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SkipPreviousIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISkipPreviousIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0.383301C1.55 0.383301 2 0.833301 2 1.3833V11.3833C2 11.9333 1.55 12.3833 1 12.3833C0.45 12.3833 0 11.9333 0 11.3833V1.3833C0 0.833301 0.45 0.383301 1 0.383301ZM4.66 7.2033L10.43 11.2733C11.09 11.7433 12.01 11.2633 12.01 10.4533V2.3133C12.01 1.5033 11.1 1.0333 10.43 1.4933L4.66 5.5633C4.09 5.9633 4.09 6.8033 4.66 7.2033Z" fill={colorCode} />
    </svg>
  );
}
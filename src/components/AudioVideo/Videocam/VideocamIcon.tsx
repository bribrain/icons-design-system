import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVideocamIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VideocamIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVideocamIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 4.8833V1.3833C14 0.833301 13.55 0.383301 13 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V11.3833C0 11.9333 0.45 12.3833 1 12.3833H13C13.55 12.3833 14 11.9333 14 11.3833V7.8833L16.29 10.1733C16.92 10.8033 18 10.3533 18 9.4633V3.2933C18 2.4033 16.92 1.9533 16.29 2.5833L14 4.8833Z" fill={colorCode} />
    </svg>
  );
}
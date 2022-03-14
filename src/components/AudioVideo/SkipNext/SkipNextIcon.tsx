import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISkipNextIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SkipNextIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISkipNextIconProps) {
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
      <path d="M1.58 11.2733L7.35 7.2033C7.91 6.8033 7.91 5.9633 7.35 5.5733L1.58 1.4933C0.91 1.0333 0 1.5033 0 2.3133V10.4533C0 11.2633 0.91 11.7333 1.58 11.2733ZM10 1.3833V11.3833C10 11.9333 10.45 12.3833 11 12.3833C11.55 12.3833 12 11.9333 12 11.3833V1.3833C12 0.833301 11.55 0.383301 11 0.383301C10.45 0.383301 10 0.833301 10 1.3833Z" fill={colorCode} />
    </svg>
  );
}
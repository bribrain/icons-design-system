import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IBuildCircleProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BuildCircleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IBuildCircleProps) {
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM14.54 14.2333L13.85 14.9233C13.46 15.3133 12.83 15.3133 12.44 14.9233L9.39 11.8733C8.17 12.3033 6.75 12.0433 5.77 11.0633C4.66 9.9533 4.47 8.2733 5.18 6.9633L7.53 9.3133L8.94 7.9033L6.58 5.5533C7.9 4.8433 9.57 5.0333 10.68 6.1433C11.66 7.1233 11.92 8.5433 11.49 9.7633L14.54 12.8133C14.93 13.2033 14.93 13.8433 14.54 14.2333Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IBuildProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BuildIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IBuildProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.09 2.29326C9.08 0.283255 6.07 -0.126745 3.65 1.05326L7.28 4.68326C7.67 5.07326 7.67 5.70326 7.28 6.09326L5.69 7.68326C5.3 8.08326 4.67 8.08326 4.28 7.68326L0.650003 4.05326C-0.519997 6.48326 -0.109997 9.47326 1.9 11.4833C3.76 13.3433 6.48 13.8333 8.79 12.9633L16.75 20.9233C17.78 21.9533 19.44 21.9533 20.46 20.9233C21.49 19.8933 21.49 18.2333 20.46 17.2133L12.54 9.28325C13.46 6.94325 12.98 4.18326 11.09 2.29326Z" fill={colorCode} />
    </svg>
  );
}
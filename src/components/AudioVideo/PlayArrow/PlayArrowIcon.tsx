import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPlayArrowIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PlayArrowIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPlayArrowIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1.20331V11.5633C0 12.3533 0.87 12.8333 1.54 12.4033L9.68 7.22331C10.3 6.83331 10.3 5.93331 9.68 5.53331L1.54 0.363309C0.87 -0.0666912 0 0.413309 0 1.20331Z" fill={colorCode} />
    </svg>
  );
}
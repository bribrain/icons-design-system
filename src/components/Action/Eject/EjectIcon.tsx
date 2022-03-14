import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IEjectProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function EjectIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IEjectProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 11.3833H13C13.55 11.3833 14 11.8333 14 12.3833C14 12.9333 13.55 13.3833 13 13.3833H1C0.45 13.3833 0 12.9333 0 12.3833C0 11.8333 0.45 11.3833 1 11.3833ZM6.17 0.63335L1.37 7.83335C0.92 8.49335 1.4 9.38335 2.2 9.38335H11.8C12.6 9.38335 13.08 8.49335 12.63 7.83335L7.83 0.63335C7.44 0.0333496 6.56 0.0333496 6.17 0.63335Z" fill={colorCode} />
    </svg>
  );
}
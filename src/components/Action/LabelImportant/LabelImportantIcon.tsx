import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILabelImportantProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LabelImportantIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILabelImportantProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 15"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M1.94 14.3733H11C11.65 14.3733 12.26 14.0633 12.63 13.5333L16.58 7.9633C16.83 7.6133 16.83 7.1533 16.58 6.8033L12.62 1.2233C12.26 0.693301 11.65 0.383301 11 0.383301H1.94C1.13 0.383301 0.659999 1.3133 1.13 1.9733L5 7.3833L1.13 12.7933C0.659999 13.4533 1.13 14.3733 1.94 14.3733Z" fill={colorCode} />
    </svg>
  );
}
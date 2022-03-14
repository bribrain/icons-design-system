import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IGetAppProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function GetAppIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IGetAppProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.59 6.3833H10V1.3833C10 0.833301 9.55 0.383301 9 0.383301H5C4.45 0.383301 4 0.833301 4 1.3833V6.3833H2.41C1.52 6.3833 1.07 7.4633 1.7 8.0933L6.29 12.6833C6.68 13.0733 7.31 13.0733 7.7 12.6833L12.29 8.0933C12.92 7.4633 12.48 6.3833 11.59 6.3833ZM0 16.3833C0 16.9333 0.45 17.3833 1 17.3833H13C13.55 17.3833 14 16.9333 14 16.3833C14 15.8333 13.55 15.3833 13 15.3833H1C0.45 15.3833 0 15.8333 0 16.3833Z" fill={colorCode} />
    </svg>
  );
}
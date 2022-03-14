import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHourglassFullProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HourglassFullIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHourglassFullProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 2.3833V5.5533C0 6.0833 0.21 6.5933 0.59 6.9733L4 10.3833L0.58 13.8033C0.21 14.1833 0 14.6933 0 15.2233V18.3833C0 19.4833 0.9 20.3833 2 20.3833H10C11.1 20.3833 12 19.4833 12 18.3833V15.2233C12 14.6933 11.79 14.1833 11.42 13.8133L8 10.3833L11.41 6.9833C11.79 6.6033 12 6.0933 12 5.5633V2.3833C12 1.2833 11.1 0.383301 10 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHourglassEmpthyProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HourglassEmpthyIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHourglassEmpthyProps) {
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
      <path d="M2 0.383301C0.9 0.383301 0 1.2833 0 2.3833V5.5533C0 6.0833 0.21 6.5933 0.59 6.9733L4 10.3833L0.58 13.8033C0.21 14.1833 0 14.6933 0 15.2233V18.3833C0 19.4833 0.9 20.3833 2 20.3833H10C11.1 20.3833 12 19.4833 12 18.3833V15.2233C12 14.6933 11.79 14.1833 11.42 13.8133L8 10.3833L11.41 6.9833C11.79 6.6033 12 6.0933 12 5.5633V2.3833C12 1.2833 11.1 0.383301 10 0.383301H2ZM10 14.8833V17.3833C10 17.9333 9.55 18.3833 9 18.3833H3C2.45 18.3833 2 17.9333 2 17.3833V14.8833L6 10.8833L10 14.8833ZM6 9.8833L2 5.8833V3.3833C2 2.8333 2.45 2.3833 3 2.3833H9C9.55 2.3833 10 2.8333 10 3.3833V5.8833L6 9.8833Z" fill={colorCode} />
    </svg>
  );
}
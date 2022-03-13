import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHourglassDisabledProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HourglassDisabledIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHourglassDisabledProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.81 1.19326C1.42 0.803257 0.790001 0.803257 0.400001 1.19326C1.49012e-06 1.58326 1.51992e-06 2.21326 0.390002 2.60326L8.58 10.7933L5.58 13.8033C5.21 14.1833 5 14.6933 5 15.2233V18.3833C5 19.4833 5.9 20.3833 7 20.3833H15C15.86 20.3833 16.58 19.8433 16.87 19.0833L18.78 20.9933C19.17 21.3833 19.8 21.3833 20.19 20.9933C20.58 20.6033 20.58 19.9733 20.19 19.5833L1.81 1.19326ZM15 17.3833C15 17.9333 14.55 18.3833 14 18.3833H8C7.45 18.3833 7 17.9333 7 17.3833V14.8833L9.84 12.0433L15 17.2133V17.3833Z" fill={colorCode} />
      <path d="M7 3.3833C7 2.8333 7.45 2.3833 8 2.3833H14C14.55 2.3833 15 2.8333 15 3.3833V5.8833L12.16 8.7233L13.41 9.9733L16.41 6.9833C16.79 6.6033 17 6.0933 17 5.5633V2.3833C17 1.2733 16.1 0.383301 15 0.383301H7C6.14 0.383301 5.42 0.923301 5.13 1.6833L7 3.5533V3.3833Z" fill={colorCode} />
    </svg>
  );
}
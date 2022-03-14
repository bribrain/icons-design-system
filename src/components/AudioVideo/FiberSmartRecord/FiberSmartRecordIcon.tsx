import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFiberSmartRecordIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FiberSmartRecordIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFiberSmartRecordIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 20.3833C13.4183 20.3833 17 16.8016 17 12.3833C17 7.96502 13.4183 4.3833 9 4.3833C4.58172 4.3833 1 7.96502 1 12.3833C1 16.8016 4.58172 20.3833 9 20.3833Z" fill={colorCode} />
      <path d="M17 5.93329V6.11329C17 6.48329 17.23 6.80329 17.57 6.96329C19.6 7.92329 21 9.99329 21 12.3833C21 14.7733 19.6 16.8433 17.57 17.8033C17.23 17.9633 17 18.2733 17 18.6433V18.8233C17 19.5033 17.71 19.9333 18.32 19.6433C21.08 18.3933 23 15.6133 23 12.3833C23 9.15329 21.08 6.37329 18.32 5.11329C17.71 4.83329 17 5.25329 17 5.93329V5.93329Z" fill={colorCode} />
    </svg>
  );
}
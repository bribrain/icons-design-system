import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISupervisorAccountProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SupervisorAccountIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISupervisorAccountProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.5 7.3833C15.88 7.3833 16.99 6.2633 16.99 4.8833C16.99 3.5033 15.88 2.3833 14.5 2.3833C13.12 2.3833 12 3.5033 12 4.8833C12 6.2633 13.12 7.3833 14.5 7.3833ZM7 6.3833C8.66 6.3833 9.99 5.0433 9.99 3.3833C9.99 1.7233 8.66 0.383301 7 0.383301C5.34 0.383301 4 1.7233 4 3.3833C4 5.0433 5.34 6.3833 7 6.3833ZM14.5 9.3833C12.67 9.3833 9 10.3033 9 12.1333V13.3833C9 13.9333 9.45 14.3833 10 14.3833H19C19.55 14.3833 20 13.9333 20 13.3833V12.1333C20 10.3033 16.33 9.3833 14.5 9.3833ZM7 8.3833C4.67 8.3833 0 9.5533 0 11.8833V13.3833C0 13.9333 0.45 14.3833 1 14.3833H7V12.1333C7 11.2833 7.33 9.7933 9.37 8.6633C8.5 8.4833 7.66 8.3833 7 8.3833Z" fill={colorCode} />
    </svg>
  );
}
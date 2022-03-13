import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAssignmentReturnedProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AssignmentReturnedIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAssignmentReturnedProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2.3833H11.82C11.4 1.2233 10.3 0.383301 9 0.383301C7.7 0.383301 6.6 1.2233 6.18 2.3833H2C0.9 2.3833 0 3.2833 0 4.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H16C17.1 20.3833 18 19.4833 18 18.3833V4.3833C18 3.2833 17.1 2.3833 16 2.3833ZM9 2.3833C9.55 2.3833 10 2.8333 10 3.3833C10 3.9333 9.55 4.3833 9 4.3833C8.45 4.3833 8 3.9333 8 3.3833C8 2.8333 8.45 2.3833 9 2.3833ZM8.65 17.0333L4 12.3833H7V8.3833H11V12.3833H14L9.35 17.0333C9.16 17.2233 8.84 17.2233 8.65 17.0333Z" fill={colorCode} />
    </svg>
  );
}
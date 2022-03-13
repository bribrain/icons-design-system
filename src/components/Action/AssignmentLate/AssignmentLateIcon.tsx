import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAssignmentLateProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AssignmentLateIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAssignmentLateProps) {
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
      <path d="M16 2.3833H11.82C11.4 1.2233 10.3 0.383301 9 0.383301C7.7 0.383301 6.6 1.2233 6.18 2.3833H2C0.9 2.3833 0 3.2833 0 4.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H16C17.1 20.3833 18 19.4833 18 18.3833V4.3833C18 3.2833 17.1 2.3833 16 2.3833ZM10 17.3833H8V15.3833H10V17.3833ZM10 12.3833C10 12.9333 9.55 13.3833 9 13.3833C8.45 13.3833 8 12.9333 8 12.3833V8.3833C8 7.8333 8.45 7.3833 9 7.3833C9.55 7.3833 10 7.8333 10 8.3833V12.3833ZM9 4.3833C8.45 4.3833 8 3.9333 8 3.3833C8 2.8333 8.45 2.3833 9 2.3833C9.55 2.3833 10 2.8333 10 3.3833C10 3.9333 9.55 4.3833 9 4.3833Z" fill={colorCode} />
    </svg>
  );
}
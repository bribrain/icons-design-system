import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAssignmentProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AssignmentIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAssignmentProps) {
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
      <path d="M16 2.3833H11.82C11.4 1.2233 10.3 0.383301 9 0.383301C7.7 0.383301 6.6 1.2233 6.18 2.3833H2C0.9 2.3833 0 3.2833 0 4.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H16C17.1 20.3833 18 19.4833 18 18.3833V4.3833C18 3.2833 17.1 2.3833 16 2.3833ZM9 2.3833C9.55 2.3833 10 2.8333 10 3.3833C10 3.9333 9.55 4.3833 9 4.3833C8.45 4.3833 8 3.9333 8 3.3833C8 2.8333 8.45 2.3833 9 2.3833ZM10 16.3833H5C4.45 16.3833 4 15.9333 4 15.3833C4 14.8333 4.45 14.3833 5 14.3833H10C10.55 14.3833 11 14.8333 11 15.3833C11 15.9333 10.55 16.3833 10 16.3833ZM13 12.3833H5C4.45 12.3833 4 11.9333 4 11.3833C4 10.8333 4.45 10.3833 5 10.3833H13C13.55 10.3833 14 10.8333 14 11.3833C14 11.9333 13.55 12.3833 13 12.3833ZM13 8.3833H5C4.45 8.3833 4 7.9333 4 7.3833C4 6.8333 4.45 6.3833 5 6.3833H13C13.55 6.3833 14 6.8333 14 7.3833C14 7.9333 13.55 8.3833 13 8.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAssignmentTurnedInProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AssignmentTurnedInIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAssignmentTurnedInProps) {
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
      <path d="M16 2.3833H11.82C11.4 1.2233 10.3 0.383301 9 0.383301C7.7 0.383301 6.6 1.2233 6.18 2.3833H2C0.9 2.3833 0 3.2833 0 4.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H16C17.1 20.3833 18 19.4833 18 18.3833V4.3833C18 3.2833 17.1 2.3833 16 2.3833ZM9 2.3833C9.55 2.3833 10 2.8333 10 3.3833C10 3.9333 9.55 4.3833 9 4.3833C8.45 4.3833 8 3.9333 8 3.3833C8 2.8333 8.45 2.3833 9 2.3833ZM6.29 15.6733L3.7 13.0833C3.31 12.6933 3.31 12.0633 3.7 11.6733C4.09 11.2833 4.72 11.2833 5.11 11.6733L7 13.5533L12.88 7.6733C13.27 7.2833 13.9 7.2833 14.29 7.6733C14.68 8.0633 14.68 8.6933 14.29 9.0833L7.7 15.6733C7.32 16.0633 6.68 16.0633 6.29 15.6733Z" fill={colorCode} />
    </svg>
  );
}
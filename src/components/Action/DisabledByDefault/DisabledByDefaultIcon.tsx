import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDisabledByDefaultProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DisabledByDefaultIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDisabledByDefaultProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833ZM13.3 13.6733C12.91 14.0633 12.28 14.0633 11.89 13.6733L9 10.7933L6.11 13.6833C5.72 14.0733 5.09 14.0733 4.7 13.6833C4.31 13.2933 4.31 12.6633 4.7 12.2733L7.59 9.3833L4.7 6.4933C4.31 6.1033 4.31 5.4733 4.7 5.0833C5.09 4.6933 5.72 4.6933 6.11 5.0833L9 7.9733L11.89 5.0933C12.28 4.7033 12.91 4.7033 13.3 5.0933C13.69 5.4833 13.69 6.1133 13.3 6.5033L10.41 9.3833L13.3 12.2633C13.68 12.6533 13.68 13.2933 13.3 13.6733Z" fill={colorCode} />
    </svg>
  );
}
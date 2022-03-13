import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAccountBoxIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AccountBoxIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAccountBoxIconProps) {
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
      <path d="M0 2.3833V16.3833C0 17.4833 0.89 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833ZM12 6.3833C12 8.0433 10.66 9.3833 9 9.3833C7.34 9.3833 6 8.0433 6 6.3833C6 4.7233 7.34 3.3833 9 3.3833C10.66 3.3833 12 4.7233 12 6.3833ZM3 14.3833C3 12.3833 7 11.2833 9 11.2833C11 11.2833 15 12.3833 15 14.3833V15.3833H3V14.3833Z" fill={colorCode} />
    </svg>
  );
}
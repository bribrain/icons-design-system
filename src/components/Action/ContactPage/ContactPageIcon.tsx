import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IContactPageProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ContactPageIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IContactPageProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.17 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H14C15.1 20.3833 16 19.4833 16 18.3833V7.2133C16 6.6833 15.79 6.1733 15.41 5.8033L10.58 0.973301C10.21 0.593301 9.7 0.383301 9.17 0.383301ZM8 8.3833C9.1 8.3833 10 9.2833 10 10.3833C10 11.4833 9.1 12.3833 8 12.3833C6.9 12.3833 6 11.4833 6 10.3833C6 9.2833 6.9 8.3833 8 8.3833ZM12 16.3833H4V15.8133C4 15.0033 4.48 14.2833 5.22 13.9633C6.07 13.5933 7.01 13.3833 8 13.3833C8.99 13.3833 9.93 13.5933 10.78 13.9633C11.52 14.2833 12 15.0033 12 15.8133V16.3833Z" fill={colorCode} />
    </svg>
  );
}
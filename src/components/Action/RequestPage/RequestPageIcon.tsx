import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRequestPageProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RequestPageIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRequestPageProps) {
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
      <path d="M15.41 5.7933L10.58 0.963301C10.21 0.593301 9.7 0.383301 9.17 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H14C15.1 20.3833 16 19.4833 16 18.3833V7.2133C16 6.6833 15.79 6.1733 15.41 5.7933ZM10 10.3833C10.55 10.3833 11 10.8333 11 11.3833V14.3833C11 14.9333 10.55 15.3833 10 15.3833H9C9 15.9333 8.55 16.3833 8 16.3833C7.45 16.3833 7 15.9333 7 15.3833H6C5.45 15.3833 5 14.9333 5 14.3833C5 13.8333 5.45 13.3833 6 13.3833H9V12.3833H6C5.45 12.3833 5 11.9333 5 11.3833V8.3833C5 7.8333 5.45 7.3833 6 7.3833H7C7 6.8333 7.45 6.3833 8 6.3833C8.55 6.3833 9 6.8333 9 7.3833H10C10.55 7.3833 11 7.8333 11 8.3833C11 8.9333 10.55 9.3833 10 9.3833H7V10.3833H10Z" fill={colorCode} />
    </svg>
  );
}
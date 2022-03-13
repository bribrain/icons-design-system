import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFindInPageProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FindInPageIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFindInPageProps) {
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
      <path d="M16 17.9733V7.2133C16 6.6833 15.79 6.1733 15.41 5.8033L10.58 0.973301C10.21 0.593301 9.7 0.383301 9.17 0.383301H2C0.9 0.383301 0.0100002 1.2833 0.0100002 2.3833L0 18.3833C0 19.4833 0.89 20.3833 1.99 20.3833H14C14.45 20.3833 14.85 20.2333 15.19 19.9833L10.76 15.5533C9.9 16.1133 8.87 16.4333 7.76 16.3733C5.39 16.2633 3.36 14.4133 3.04 12.0633C2.6 8.7133 5.49 5.8833 8.87 6.4533C10.82 6.7833 12.44 8.3033 12.87 10.2333C13.2 11.6933 12.88 13.0533 12.17 14.1333L16 17.9733ZM5 11.3833C5 13.0433 6.34 14.3833 8 14.3833C9.66 14.3833 11 13.0433 11 11.3833C11 9.7233 9.66 8.3833 8 8.3833C6.34 8.3833 5 9.7233 5 11.3833Z" fill={colorCode} />
    </svg>
  );
}
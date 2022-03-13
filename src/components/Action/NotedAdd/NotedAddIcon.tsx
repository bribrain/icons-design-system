import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface INotedAddProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NotedAddIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: INotedAddProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M10.59 0.973301C10.21 0.593301 9.7 0.383301 9.17 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V18.3833C0 19.4833 0.89 20.3833 1.99 20.3833H14C15.1 20.3833 16 19.4833 16 18.3833V7.2133C16 6.6833 15.79 6.1733 15.41 5.8033L10.59 0.973301ZM11 14.3833H9V16.3833C9 16.9333 8.55 17.3833 8 17.3833C7.45 17.3833 7 16.9333 7 16.3833V14.3833H5C4.45 14.3833 4 13.9333 4 13.3833C4 12.8333 4.45 12.3833 5 12.3833H7V10.3833C7 9.8333 7.45 9.3833 8 9.3833C8.55 9.3833 9 9.8333 9 10.3833V12.3833H11C11.55 12.3833 12 12.8333 12 13.3833C12 13.9333 11.55 14.3833 11 14.3833ZM9 6.3833V1.8833L14.5 7.3833H10C9.45 7.3833 9 6.9333 9 6.3833Z" fill={colorCode} />
    </svg>
  );
}
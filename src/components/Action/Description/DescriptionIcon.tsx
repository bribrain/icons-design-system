import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDescriptionProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DescriptionIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDescriptionProps) {
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
      <path d="M10.59 0.973301C10.21 0.593301 9.7 0.383301 9.17 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V18.3833C0 19.4833 0.89 20.3833 1.99 20.3833H14C15.1 20.3833 16 19.4833 16 18.3833V7.2133C16 6.6833 15.79 6.1733 15.41 5.8033L10.59 0.973301ZM11 16.3833H5C4.45 16.3833 4 15.9333 4 15.3833C4 14.8333 4.45 14.3833 5 14.3833H11C11.55 14.3833 12 14.8333 12 15.3833C12 15.9333 11.55 16.3833 11 16.3833ZM11 12.3833H5C4.45 12.3833 4 11.9333 4 11.3833C4 10.8333 4.45 10.3833 5 10.3833H11C11.55 10.3833 12 10.8333 12 11.3833C12 11.9333 11.55 12.3833 11 12.3833ZM9 6.3833V1.8833L14.5 7.3833H10C9.45 7.3833 9 6.9333 9 6.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IMovieIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MovieIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IMovieIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0.383301L17.82 4.0233C17.9 4.1833 17.78 4.3833 17.6 4.3833H15.62C15.24 4.3833 14.89 4.1733 14.73 3.8333L13 0.383301H11L12.82 4.0233C12.9 4.1833 12.78 4.3833 12.6 4.3833H10.62C10.24 4.3833 9.89 4.1733 9.73 3.8333L8 0.383301H6L7.82 4.0233C7.9 4.1833 7.78 4.3833 7.6 4.3833H5.62C5.24 4.3833 4.89 4.1733 4.72 3.8333L3 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.9 16.3833 2 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V1.3833C20 0.833301 19.55 0.383301 19 0.383301H16Z" fill={colorCode} />
    </svg>
  );
}
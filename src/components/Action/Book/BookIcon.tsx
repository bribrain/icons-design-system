import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IBookProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BookIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IBookProps) {
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
      <path d="M14 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H14C15.1 20.3833 16 19.4833 16 18.3833V2.3833C16 1.2833 15.1 0.383301 14 0.383301ZM2 2.3833H7V10.3833L4.5 8.8833L2 10.3833V2.3833Z" fill={colorCode} />
    </svg>
  );
}
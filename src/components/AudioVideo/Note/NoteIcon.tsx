import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface INoteIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NoteIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: INoteIconProps) {
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
      <path d="M19.41 5.7933L14.58 0.963301C14.21 0.593301 13.7 0.383301 13.17 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V14.3933C0 15.4933 0.89 16.3833 1.99 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V7.2133C20 6.6833 19.79 6.1733 19.41 5.7933ZM13 1.8833L18.5 7.3833H14C13.45 7.3833 13 6.9333 13 6.3833V1.8833Z" fill={colorCode} />
    </svg>
  );
}
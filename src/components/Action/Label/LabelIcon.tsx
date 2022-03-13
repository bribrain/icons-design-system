import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILabelProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LabelIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILabelProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 19 15"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M14.63 1.2233C14.27 0.713301 13.67 0.383301 13 0.383301L2 0.393301C0.9 0.393301 0 1.2833 0 2.3833V12.3833C0 13.4833 0.9 14.3733 2 14.3733L13 14.3833C13.67 14.3833 14.27 14.0533 14.63 13.5433L18.59 7.9633C18.84 7.6133 18.84 7.1533 18.59 6.8033L14.63 1.2233Z" fill={colorCode} />
    </svg>
  );
}
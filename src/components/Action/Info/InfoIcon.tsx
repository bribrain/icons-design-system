import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IInfoProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function InfoIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IInfoProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM10 15.3833C9.45 15.3833 9 14.9333 9 14.3833V10.3833C9 9.8333 9.45 9.3833 10 9.3833C10.55 9.3833 11 9.8333 11 10.3833V14.3833C11 14.9333 10.55 15.3833 10 15.3833ZM11 7.3833H9V5.3833H11V7.3833Z" fill={colorCode} />
    </svg>
  );
}
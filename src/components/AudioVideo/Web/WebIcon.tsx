import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IWebIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WebIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IWebIconProps) {
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
      <path d="M18 0.383301H2C0.9 0.383301 0.00999999 1.2833 0.00999999 2.3833L0 14.3833C0 15.4833 0.9 16.3833 2 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301ZM2 5.3833H12.5V8.8833H2V5.3833ZM2 10.8833H12.5V14.3833H3C2.45 14.3833 2 13.9333 2 13.3833V10.8833ZM17 14.3833H14.5V5.3833H18V13.3833C18 13.9333 17.55 14.3833 17 14.3833Z" fill={colorCode} />
    </svg>
  );
}
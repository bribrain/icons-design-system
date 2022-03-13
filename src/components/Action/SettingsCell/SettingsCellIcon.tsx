import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsCellProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsCellIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsCellProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 12 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 24.3833H3V22.3833H1V24.3833ZM5 24.3833H7V22.3833H5V24.3833ZM9 24.3833H11V22.3833H9V24.3833ZM10 0.393301L2 0.383301C0.9 0.383301 0 1.2833 0 2.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H10C11.1 20.3833 12 19.4833 12 18.3833V2.3833C12 1.2833 11.1 0.393301 10 0.393301ZM10 16.3833H2V4.3833H10V16.3833Z" fill={colorCode} />
    </svg>
  );
}
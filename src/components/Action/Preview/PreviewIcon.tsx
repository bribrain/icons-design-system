import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPreviewProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PreviewIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPreviewProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.89 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.11 0.383301 16 0.383301ZM16 16.3833H2V4.3833H16V16.3833ZM10.5 10.3833C10.5 11.2133 9.83 11.8833 9 11.8833C8.17 11.8833 7.5 11.2133 7.5 10.3833C7.5 9.5533 8.17 8.8833 9 8.8833C9.83 8.8833 10.5 9.5533 10.5 10.3833ZM9 6.3833C6.27 6.3833 3.94 8.0433 3 10.3833C3.94 12.7233 6.27 14.3833 9 14.3833C11.73 14.3833 14.06 12.7233 15 10.3833C14.06 8.0433 11.73 6.3833 9 6.3833ZM9 12.8833C7.62 12.8833 6.5 11.7633 6.5 10.3833C6.5 9.0033 7.62 7.8833 9 7.8833C10.38 7.8833 11.5 9.0033 11.5 10.3833C11.5 11.7633 10.38 12.8833 9 12.8833Z" fill={colorCode} />
    </svg>
  );
}
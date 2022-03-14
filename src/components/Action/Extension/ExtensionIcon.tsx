import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IExtensionProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ExtensionIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IExtensionProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.5 10.3833H17V6.3833C17 5.2833 16.1 4.3833 15 4.3833H11V2.8833C11 1.5033 9.88 0.383301 8.5 0.383301C7.12 0.383301 6 1.5033 6 2.8833V4.3833H2C0.9 4.3833 0.00999999 5.2833 0.00999999 6.3833V10.1833H1.5C2.99 10.1833 4.2 11.3933 4.2 12.8833C4.2 14.3733 2.99 15.5833 1.5 15.5833H0V19.3833C0 20.4833 0.9 21.3833 2 21.3833H5.8V19.8833C5.8 18.3933 7.01 17.1833 8.5 17.1833C9.99 17.1833 11.2 18.3933 11.2 19.8833V21.3833H15C16.1 21.3833 17 20.4833 17 19.3833V15.3833H18.5C19.88 15.3833 21 14.2633 21 12.8833C21 11.5033 19.88 10.3833 18.5 10.3833Z" fill={colorCode} />
    </svg>
  );
}
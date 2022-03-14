import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISmartButtonProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SmartButtonIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISmartButtonProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 2.3833V8.3833C20 9.4833 19.1 10.3833 18 10.3833H17V8.3833H18V2.3833H2V8.3833H8V10.3833H2C0.9 10.3833 0 9.4833 0 8.3833V2.3833C0 1.2833 0.9 0.383301 2 0.383301H18C19.1 0.383301 20 1.2833 20 2.3833ZM12.04 11.3733C12.22 11.7633 12.77 11.7633 12.95 11.3733L13.58 9.9733L14.98 9.3433C15.37 9.1633 15.37 8.6133 14.98 8.4333L13.58 7.8033L12.95 6.4033C12.77 6.0133 12.22 6.0133 12.04 6.4033L11.41 7.8033L10.01 8.4333C9.62 8.6133 9.62 9.1633 10.01 9.3433L11.41 9.9733L12.04 11.3733ZM14.74 6.8133C14.84 7.0333 15.16 7.0333 15.26 6.8133L15.62 6.0133L16.42 5.6533C16.64 5.5533 16.64 5.2333 16.42 5.1333L15.62 4.7733L15.26 3.9733C15.16 3.7533 14.84 3.7533 14.74 3.9733L14.38 4.7733L13.58 5.1333C13.36 5.2333 13.36 5.5533 13.58 5.6533L14.38 6.0133L14.74 6.8133Z" fill={colorCode} />
    </svg>
  );
}
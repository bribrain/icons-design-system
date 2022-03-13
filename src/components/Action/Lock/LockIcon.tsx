import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILockProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LockIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILockProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 22"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M14 7.3833H13V5.3833C13 2.6233 10.76 0.383301 8 0.383301C5.24 0.383301 3 2.6233 3 5.3833V7.3833H2C0.9 7.3833 0 8.2833 0 9.3833V19.3833C0 20.4833 0.9 21.3833 2 21.3833H14C15.1 21.3833 16 20.4833 16 19.3833V9.3833C16 8.2833 15.1 7.3833 14 7.3833ZM8 16.3833C6.9 16.3833 6 15.4833 6 14.3833C6 13.2833 6.9 12.3833 8 12.3833C9.1 12.3833 10 13.2833 10 14.3833C10 15.4833 9.1 16.3833 8 16.3833ZM5 7.3833V5.3833C5 3.7233 6.34 2.3833 8 2.3833C9.66 2.3833 11 3.7233 11 5.3833V7.3833H5Z" fill={colorCode} />
    </svg>
  );
}
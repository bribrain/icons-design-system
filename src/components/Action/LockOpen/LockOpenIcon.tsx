import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILockOpenProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LockOpenIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILockOpenProps) {
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
      <path d="M8 12.3833C6.9 12.3833 6 13.2833 6 14.3833C6 15.4833 6.9 16.3833 8 16.3833C9.1 16.3833 10 15.4833 10 14.3833C10 13.2833 9.1 12.3833 8 12.3833ZM14 7.3833H13V5.3833C13 2.6233 10.76 0.383301 8 0.383301C5.72 0.383301 3.73 1.9233 3.16 4.1333C3.02 4.6733 3.34 5.2133 3.88 5.3533C4.41 5.4933 4.96 5.1733 5.1 4.6333C5.44 3.3133 6.63 2.3833 8 2.3833C9.65 2.3833 11 3.7333 11 5.3833V7.3833H2C0.9 7.3833 0 8.2833 0 9.3833V19.3833C0 20.4833 0.9 21.3833 2 21.3833H14C15.1 21.3833 16 20.4833 16 19.3833V9.3833C16 8.2833 15.1 7.3833 14 7.3833ZM14 18.3833C14 18.9333 13.55 19.3833 13 19.3833H3C2.45 19.3833 2 18.9333 2 18.3833V10.3833C2 9.8333 2.45 9.3833 3 9.3833H13C13.55 9.3833 14 9.8333 14 10.3833V18.3833Z" fill={colorCode} />
    </svg>
  );
}
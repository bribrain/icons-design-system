import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPermIdentityProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PermIdentityIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPermIdentityProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 8.3833C10.21 8.3833 12 6.5933 12 4.3833C12 2.1733 10.21 0.383301 8 0.383301C5.79 0.383301 4 2.1733 4 4.3833C4 6.5933 5.79 8.3833 8 8.3833ZM8 2.3833C9.1 2.3833 10 3.2833 10 4.3833C10 5.4833 9.1 6.3833 8 6.3833C6.9 6.3833 6 5.4833 6 4.3833C6 3.2833 6.9 2.3833 8 2.3833ZM8 9.3833C5.33 9.3833 0 10.7233 0 13.3833V15.3833C0 15.9333 0.45 16.3833 1 16.3833H15C15.55 16.3833 16 15.9333 16 15.3833V13.3833C16 10.7233 10.67 9.3833 8 9.3833ZM14 14.3833H2V13.3933C2.2 12.6733 5.3 11.3833 8 11.3833C10.7 11.3833 13.8 12.6733 14 13.3833V14.3833Z" fill={colorCode} />
    </svg>
  );
}
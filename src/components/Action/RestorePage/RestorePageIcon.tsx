import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRestorePageProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RestorePageIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRestorePageProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.41 5.7933L10.58 0.963301C10.21 0.593301 9.7 0.383301 9.17 0.383301H2C0.9 0.383301 0.0100002 1.2833 0.0100002 2.3833L0 18.3833C0 19.4833 0.89 20.3833 1.99 20.3833H14C15.1 20.3833 16 19.4833 16 18.3833V7.2133C16 6.6833 15.79 6.1733 15.41 5.7933ZM8 16.3833C6.35 16.3833 4.81 15.5733 3.88 14.2133C3.65 13.8733 3.73 13.4033 4.07 13.1733C4.41 12.9333 4.88 13.0233 5.11 13.3633C5.76 14.3133 6.84 14.8833 7.99 14.8833C9.92 14.8833 11.49 13.3133 11.49 11.3833C11.49 9.4533 9.93 7.8833 8 7.8833C6.67 7.8833 5.48 8.6233 4.89 9.7733L6.5 11.3833H3C2.72 11.3833 2.5 11.1633 2.5 10.8833V7.3833L3.8 8.6833C4.71 7.2733 6.26 6.3833 8 6.3833C10.76 6.3833 13 8.6233 13 11.3833C13 14.1433 10.76 16.3833 8 16.3833Z" fill={colorCode} />
    </svg>
  );
}
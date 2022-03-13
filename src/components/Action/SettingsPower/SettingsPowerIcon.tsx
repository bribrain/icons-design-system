import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsPowerProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsPowerIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsPowerProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 22.3833H6V20.3833H4V22.3833ZM8 22.3833H10V20.3833H8V22.3833ZM9 0.383301C8.45 0.383301 8 0.833301 8 1.3833V9.3833C8 9.9333 8.45 10.3833 9 10.3833C9.55 10.3833 10 9.9333 10 9.3833V1.3833C10 0.833301 9.55 0.383301 9 0.383301ZM12.94 3.4433L12.92 3.4633C12.51 3.8733 12.56 4.5433 13 4.9233C14.51 6.2633 15.33 8.3533 14.88 10.6233C14.42 12.9033 12.59 14.7633 10.32 15.2433C6.43 16.0733 3 13.1233 3 9.3833C3 7.6033 3.78 6.0133 5.01 4.9133C5.44 4.5233 5.48 3.8733 5.08 3.4633L5.06 3.4433C4.69 3.0733 4.1 3.0533 3.7 3.4033C1.69 5.1733 0.579996 7.9333 1.14 10.9233C1.73 14.0733 4.25 16.6233 7.4 17.2333C12.52 18.2233 17 14.3333 17 9.3833C17 7.0033 15.95 4.8633 14.29 3.3933C13.9 3.0533 13.31 3.0733 12.94 3.4433ZM12 22.3833H14V20.3833H12V22.3833Z" fill={colorCode} />
    </svg>
  );
}
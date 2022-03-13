import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsRemoteProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsRemoteIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsRemoteProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 9.3833H5C4.45 9.3833 4 9.8333 4 10.3833V22.3833C4 22.9333 4.45 23.3833 5 23.3833H11C11.55 23.3833 12 22.9333 12 22.3833V10.3833C12 9.8333 11.55 9.3833 11 9.3833ZM8 15.3833C6.9 15.3833 6 14.4833 6 13.3833C6 12.2833 6.9 11.3833 8 11.3833C9.1 11.3833 10 12.2833 10 13.3833C10 14.4833 9.1 15.3833 8 15.3833ZM3.82 7.2033C4.17 7.5533 4.72 7.5833 5.12 7.3033C5.93 6.7233 6.93 6.3833 8 6.3833C9.07 6.3833 10.07 6.7233 10.88 7.2933C11.28 7.5733 11.83 7.5533 12.18 7.2033C12.61 6.7733 12.57 6.0633 12.09 5.7033C10.94 4.8733 9.53 4.3833 8 4.3833C6.47 4.3833 5.06 4.8733 3.91 5.7033C3.42 6.0533 3.39 6.7733 3.82 7.2033ZM8 0.383301C5.36 0.383301 2.94 1.3133 1.05 2.8533C0.59 3.2333 0.549999 3.9233 0.969999 4.3433C1.33 4.7033 1.9 4.7333 2.29 4.4133C3.84 3.1533 5.83 2.3833 8 2.3833C10.17 2.3833 12.16 3.1533 13.7 4.4233C14.09 4.7433 14.66 4.7133 15.02 4.3533C15.44 3.9333 15.4 3.2433 14.94 2.8633C13.06 1.3133 10.64 0.383301 8 0.383301Z" fill={colorCode} />
    </svg>
  );
}
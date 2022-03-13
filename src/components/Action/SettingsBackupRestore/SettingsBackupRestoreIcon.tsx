import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsBackupRestoreProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsBackupRestoreIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsBackupRestoreProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 9.38331C14 8.28331 13.1 7.38331 12 7.38331C10.9 7.38331 10 8.28331 10 9.38331C10 10.4833 10.9 11.3833 12 11.3833C13.1 11.3833 14 10.4833 14 9.38331ZM12.26 0.383312C7.17 0.243312 3 4.33331 3 9.38331H1.21C0.76 9.38331 0.54 9.92331 0.86 10.2333L3.65 13.0233C3.85 13.2233 4.16 13.2233 4.36 13.0233L7.15 10.2333C7.46 9.92331 7.24 9.38331 6.79 9.38331H5C5 5.48331 8.18 2.33331 12.1 2.38331C15.82 2.43331 18.95 5.56331 19 9.28331C19.05 13.1933 15.9 16.3833 12 16.3833C10.75 16.3833 9.58 16.0433 8.56 15.4733C8.17 15.2533 7.69 15.3333 7.38 15.6533C6.92 16.1133 7.01 16.9033 7.58 17.2233C8.89 17.9533 10.39 18.3833 12 18.3833C17.05 18.3833 21.14 14.2133 21 9.12331C20.87 4.43331 16.95 0.513312 12.26 0.383312Z" fill={colorCode} />
    </svg>
  );
}
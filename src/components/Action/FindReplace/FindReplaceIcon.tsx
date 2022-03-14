import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFindReplaceProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FindReplaceIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFindReplaceProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 2.3833C8.38 2.3833 9.63 2.9433 10.54 3.8433L8.85 5.5333C8.54 5.8433 8.76 6.3833 9.21 6.3833H13.5C13.78 6.3833 14 6.1633 14 5.8833V1.5933C14 1.1433 13.46 0.923301 13.15 1.2433L11.95 2.4433C10.68 1.1633 8.93 0.383301 7 0.383301C3.96 0.383301 1.38 2.3233 0.42 5.0233C0.18 5.6833 0.65 6.3833 1.35 6.3833C1.77 6.3833 2.14 6.1233 2.28 5.7233C2.96 3.7833 4.82 2.3833 7 2.3833ZM12.64 11.5233C13.04 10.9833 13.36 10.3733 13.59 9.7233C13.82 9.0733 13.34 8.3833 12.65 8.3833C12.23 8.3833 11.86 8.6433 11.72 9.0433C11.04 10.9833 9.18 12.3833 7 12.3833C5.62 12.3833 4.37 11.8233 3.46 10.9233L5.15 9.2333C5.46 8.9233 5.24 8.3833 4.79 8.3833H0.5C0.22 8.3833 0 8.6033 0 8.8833V13.1733C0 13.6233 0.54 13.8433 0.85 13.5233L2.05 12.3233C3.32 13.6033 5.07 14.3833 7 14.3833C8.55 14.3833 9.98 13.8733 11.14 13.0233L15.25 17.1333C15.66 17.5433 16.33 17.5433 16.74 17.1333C17.15 16.7233 17.15 16.0533 16.74 15.6433L12.64 11.5233Z" fill={colorCode} />
    </svg>
  );
}
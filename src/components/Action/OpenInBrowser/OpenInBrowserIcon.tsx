import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IOpenInBrowserProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function OpenInBrowserIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IOpenInBrowserProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.9 16.3833 2 16.3833H5C5.55 16.3833 6 15.9333 6 15.3833C6 14.8333 5.55 14.3833 5 14.3833H2V4.3833H16V14.3833H13C12.45 14.3833 12 14.8333 12 15.3833C12 15.9333 12.45 16.3833 13 16.3833H16C17.1 16.3833 18 15.4833 18 14.3833V2.3833C18 1.2833 17.11 0.383301 16 0.383301ZM8.65 6.7333L5.86 9.5233C5.54 9.8433 5.76 10.3833 6.21 10.3833H8V15.3833C8 15.9333 8.45 16.3833 9 16.3833C9.55 16.3833 10 15.9333 10 15.3833V10.3833H11.79C12.24 10.3833 12.46 9.8433 12.14 9.5333L9.35 6.7433C9.16 6.5433 8.84 6.5433 8.65 6.7333Z" fill={colorCode} />
    </svg>
  );
}
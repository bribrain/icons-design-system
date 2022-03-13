import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IChromeReaderModeProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ChromeReaderModeIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IChromeReaderModeProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V15.3833C0 16.4833 0.9 17.3833 2 17.3833H20C21.1 17.3833 22 16.4833 22 15.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM20 14.3833C20 14.9333 19.55 15.3833 19 15.3833H11V2.3833H19C19.55 2.3833 20 2.8333 20 3.3833V14.3833ZM18.25 5.8833H12.75C12.34 5.8833 12 6.2233 12 6.6333C12 7.0433 12.34 7.3833 12.75 7.3833H18.25C18.66 7.3833 19 7.0433 19 6.6333C19 6.2233 18.66 5.8833 18.25 5.8833ZM18.25 8.3833H12.75C12.34 8.3833 12 8.7233 12 9.1333C12 9.5433 12.34 9.8833 12.75 9.8833H18.25C18.66 9.8833 19 9.5433 19 9.1333C19 8.7233 18.66 8.3833 18.25 8.3833ZM18.25 10.8833H12.75C12.34 10.8833 12 11.2233 12 11.6333C12 12.0433 12.34 12.3833 12.75 12.3833H18.25C18.66 12.3833 19 12.0433 19 11.6333C19 11.2233 18.66 10.8833 18.25 10.8833Z" fill={colorCode} />
    </svg>
  );
}
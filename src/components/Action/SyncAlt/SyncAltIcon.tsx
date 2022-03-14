import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISyncAltProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SyncAltIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISyncAltProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.65 3.03333L16.86 0.243331C16.54 -0.0766687 16 0.143331 16 0.593331V2.38333H2C1.45 2.38333 1 2.83333 1 3.38333C1 3.93333 1.45 4.38333 2 4.38333H16V6.17333C16 6.62333 16.54 6.84333 16.85 6.52333L19.64 3.73333C19.84 3.54333 19.84 3.22333 19.65 3.03333Z" fill={colorCode} />
      <path d="M0.349999 11.7333L3.14 14.5233C3.46 14.8433 4 14.6233 4 14.1733V12.3833H18C18.55 12.3833 19 11.9333 19 11.3833C19 10.8333 18.55 10.3833 18 10.3833H4V8.59333C4 8.14333 3.46 7.92333 3.15 8.24333L0.359999 11.0333C0.159999 11.2233 0.159999 11.5433 0.349999 11.7333Z" fill={colorCode} />
    </svg>
  );
}
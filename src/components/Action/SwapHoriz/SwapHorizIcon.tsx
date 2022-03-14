import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISwapHorizProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SwapHorizIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISwapHorizProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.14 6.24333L0.359999 9.03333C0.169999 9.23333 0.169999 9.54333 0.359999 9.74333L3.14 12.5333C3.45 12.8533 3.99 12.6233 3.99 12.1833V10.3833H10C10.55 10.3833 11 9.93333 11 9.38333C11 8.83333 10.55 8.38333 10 8.38333H3.99V6.59333C3.99 6.14333 3.45 5.92333 3.14 6.24333ZM17.65 3.03333L14.87 0.243328C14.56 -0.0766723 14.02 0.153328 14.02 0.593328V2.38333H8C7.45 2.38333 7 2.83333 7 3.38333C7 3.93333 7.45 4.38333 8 4.38333H14.01V6.17333C14.01 6.62333 14.55 6.84333 14.86 6.52333L17.64 3.73333C17.84 3.54333 17.84 3.22333 17.65 3.03333Z" fill={colorCode} />
    </svg>
  );
}
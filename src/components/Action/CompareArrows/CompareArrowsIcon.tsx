import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICompareArrowsProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CompareArrowsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICompareArrowsProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.01 8.38333H1C0.45 8.38333 0 8.83333 0 9.38333C0 9.93333 0.45 10.3833 1 10.3833H7.01V12.1733C7.01 12.6233 7.55 12.8433 7.86 12.5233L10.64 9.73333C10.83 9.53333 10.83 9.22333 10.64 9.02333L7.86 6.23333C7.55 5.91333 7.01 6.14333 7.01 6.58333V8.38333ZM12.99 6.17333V4.38333H19C19.55 4.38333 20 3.93333 20 3.38333C20 2.83333 19.55 2.38333 19 2.38333H12.99V0.593331C12.99 0.143331 12.45 -0.0766687 12.14 0.243331L9.36 3.03333C9.17 3.23333 9.17 3.54333 9.36 3.74333L12.14 6.53333C12.45 6.84333 12.99 6.62333 12.99 6.17333Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFavoriteProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FavoriteIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFavoriteProps) {
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
      <path d="M12.35 17.5133C11.59 18.2033 10.42 18.2033 9.66 17.5033L9.55 17.4033C4.3 12.6533 0.87 9.54334 1 5.66334C1.06 3.96334 1.93 2.33334 3.34 1.37334C5.98 -0.426655 9.24 0.413345 11 2.47334C12.76 0.413345 16.02 -0.436655 18.66 1.37334C20.07 2.33334 20.94 3.96334 21 5.66334C21.14 9.54334 17.7 12.6533 12.45 17.4233L12.35 17.5133Z" fill={colorCode} />
    </svg>
  );
}
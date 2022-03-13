import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFavoriteBorderProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FavoriteBorderIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFavoriteBorderProps) {
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
      <path d="M18.66 1.37334C16.02 -0.426655 12.76 0.413345 11 2.47334C9.24 0.413345 5.98 -0.436655 3.34 1.37334C1.94 2.33334 1.06 3.95334 1 5.66334C0.86 9.54334 4.3 12.6533 9.55 17.4233L9.65 17.5133C10.41 18.2033 11.58 18.2033 12.34 17.5033L12.45 17.4033C17.7 12.6433 21.13 9.53335 21 5.65335C20.94 3.95335 20.06 2.33334 18.66 1.37334ZM11.1 15.9333L11 16.0333L10.9 15.9333C6.14 11.6233 3 8.77334 3 5.88334C3 3.88334 4.5 2.38334 6.5 2.38334C8.04 2.38334 9.54 3.37334 10.07 4.74334H11.94C12.46 3.37334 13.96 2.38334 15.5 2.38334C17.5 2.38334 19 3.88334 19 5.88334C19 8.77334 15.86 11.6233 11.1 15.9333Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IInvertColorsProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function InvertColorsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IInvertColorsProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M2.34 5.3133C-0.78 8.4333 -0.78 13.5033 2.34 16.6233C3.9 18.1833 5.95 18.9633 8 18.9633C10.05 18.9633 12.1 18.1833 13.66 16.6233C16.78 13.5033 16.78 8.4333 13.66 5.3133L8.71 0.363301C8.32 -0.0266992 7.69 -0.0266992 7.3 0.363301L2.34 5.3133ZM8 16.9733C6.4 16.9733 4.89 16.3533 3.76 15.2133C2.62 14.0733 2 12.5733 2 10.9733C2 9.3733 2.62 7.8633 3.76 6.7333L8 2.4833V16.9733Z" fill={colorCode} />
    </svg>
  );
}
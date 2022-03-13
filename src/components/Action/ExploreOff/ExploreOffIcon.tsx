import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IExploreOffProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ExploreOffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IExploreOffProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 4.3833L14.09 10.6433L19.34 15.8933C20.39 14.3133 21 12.4233 21 10.3833C21 4.8633 16.52 0.383301 11 0.383301C8.95999 0.383301 7.06999 0.993301 5.48999 2.0433L10.74 7.2933L17 4.3833ZM1.80999 4.0233L2.65999 4.8733C1.28999 6.9433 0.659994 9.5533 1.17999 12.3233C1.92999 16.2733 5.09999 19.4533 9.05999 20.2033C11.83 20.7233 14.44 20.1033 16.51 18.7233L17.36 19.5733C17.75 19.9633 18.38 19.9633 18.77 19.5733C19.16 19.1833 19.16 18.5533 18.77 18.1633L3.21999 2.6033C2.82999 2.2133 2.19999 2.2133 1.80999 2.6033C1.41999 2.9933 1.41999 3.6333 1.80999 4.0233ZM7.90999 10.1233L11.26 13.4733L4.99999 16.3833L7.90999 10.1233Z" fill={colorCode} />
    </svg>
  );
}
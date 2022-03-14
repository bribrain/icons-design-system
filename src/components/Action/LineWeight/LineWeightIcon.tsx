import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILineWeightProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LineWeightIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILineWeightProps) {
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
      <path d="M17 11.3833H1C0.45 11.3833 0 11.8333 0 12.3833C0 12.9333 0.45 13.3833 1 13.3833H17C17.55 13.3833 18 12.9333 18 12.3833C18 11.8333 17.55 11.3833 17 11.3833ZM17 6.3833H1C0.45 6.3833 0 6.8333 0 7.3833V8.3833C0 8.9333 0.45 9.3833 1 9.3833H17C17.55 9.3833 18 8.9333 18 8.3833V7.3833C18 6.8333 17.55 6.3833 17 6.3833ZM17 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V3.3833C0 3.9333 0.45 4.3833 1 4.3833H17C17.55 4.3833 18 3.9333 18 3.3833V1.3833C18 0.833301 17.55 0.383301 17 0.383301ZM17.5 15.3833H0.5C0.22 15.3833 0 15.6033 0 15.8833C0 16.1633 0.22 16.3833 0.5 16.3833H17.5C17.78 16.3833 18 16.1633 18 15.8833C18 15.6033 17.78 15.3833 17.5 15.3833Z" fill={colorCode} />
    </svg>
  );
}
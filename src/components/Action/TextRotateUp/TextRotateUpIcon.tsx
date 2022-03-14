import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITextRotateUpProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TextRotateUpIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITextRotateUpProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.35 0.733313C15.15 0.533313 14.84 0.533313 14.64 0.733313L12.85 2.52331C12.54 2.84331 12.76 3.38331 13.21 3.38331H14V15.3833C14 15.9333 14.45 16.3833 15 16.3833C15.55 16.3833 16 15.9333 16 15.3833V3.38331H16.79C17.24 3.38331 17.46 2.84331 17.14 2.53331L15.35 0.733313ZM8.8 11.8833V6.88331L10.4 6.22331C10.76 6.08331 11 5.73331 11 5.34331C11 4.65331 10.29 4.19331 9.66 4.46331L0.69 8.34331C0.27 8.51331 0 8.92331 0 9.38331C0 9.84331 0.27 10.2533 0.69 10.4333L9.66 14.3133C10.29 14.5833 11 14.1133 11 13.4233C11 13.0333 10.76 12.6833 10.4 12.5333L8.8 11.8833ZM1.98 9.38331L7 7.51331V11.2533L1.98 9.38331Z" fill={colorCode} />
    </svg>
  );
}
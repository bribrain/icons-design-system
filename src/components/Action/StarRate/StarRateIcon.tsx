import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IStarRateProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function StarRateIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IStarRateProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.43 6.38331L8.96 1.54331C8.67 0.593311 7.33 0.593311 7.05 1.54331L5.57 6.38331H1.12C0.150001 6.38331 -0.249999 7.63331 0.540001 8.19331L4.18 10.7933L2.75 15.4033C2.46 16.3333 3.54 17.0833 4.31 16.4933L8 13.6933L11.69 16.5033C12.46 17.0933 13.54 16.3433 13.25 15.4133L11.82 10.8033L15.46 8.20331C16.25 7.63331 15.85 6.39331 14.88 6.39331H10.43V6.38331Z" fill={colorCode} />
    </svg>
  );
}
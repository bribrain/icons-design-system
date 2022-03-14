import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDoneOutlineProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DoneOutlineIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDoneOutlineProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.47 3.01335C20.86 3.40335 20.86 4.02335 20.47 4.41335L9.13001 15.7534C8.74001 16.1434 8.12001 16.1434 7.73001 15.7534L3.53001 11.5533C3.14001 11.1633 3.14001 10.5434 3.53001 10.1533C3.92001 9.76335 4.54001 9.76335 4.93001 10.1533L8.43001 13.6533L19.07 3.01335C19.46 2.62335 20.08 2.62335 20.47 3.01335ZM18.36 0.89335L8.43001 10.8233L5.64001 8.03335C4.86001 7.25335 3.59001 7.25335 2.81001 8.03335L1.41001 9.43335C0.630012 10.2133 0.630012 11.4833 1.41001 12.2633L7.01001 17.8633C7.79001 18.6434 9.06001 18.6434 9.84001 17.8633L22.59 5.12335C23.37 4.34335 23.37 3.07335 22.59 2.29335L21.19 0.89335C20.4 0.11335 19.14 0.11335 18.36 0.89335Z" fill={colorCode} />
    </svg>
  );
}
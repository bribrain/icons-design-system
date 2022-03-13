import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface INextPlanningProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NextPlanningIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: INextPlanningProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM16 12.3533H11L13.26 10.0933C12.35 9.0333 11.01 8.3533 9.5 8.3533C7.13 8.3533 5.15 10.0133 4.64 12.2333L3.68 11.9133C4.32 9.2933 6.68 7.3533 9.5 7.3533C11.28 7.3533 12.87 8.1433 13.97 9.3833L16 7.3533V12.3533Z" fill={colorCode} />
    </svg>
  );
}
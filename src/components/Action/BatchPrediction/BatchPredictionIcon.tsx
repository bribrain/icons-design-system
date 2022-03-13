import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IBatchPredictionProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BatchPredictionIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IBatchPredictionProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 6.3833H2C0.9 6.3833 0 7.2833 0 8.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H12C13.1 20.3833 14 19.4833 14 18.3833V8.3833C14 7.2833 13.1 6.3833 12 6.3833ZM7 18.8833C6.45 18.8833 6 18.4333 6 17.8833V17.3833H8V17.8833C8 18.4333 7.55 18.8833 7 18.8833ZM8 16.3833H6C6 14.8833 3.5 13.3833 3.5 11.3833C3.5 9.4533 5.07 7.8833 7 7.8833C8.93 7.8833 10.5 9.4533 10.5 11.3833C10.5 13.3833 8 14.8833 8 16.3833ZM13 4.8833H1C1 4.0533 1.67 3.3833 2.5 3.3833H11.5C12.33 3.3833 13 4.0533 13 4.8833ZM12 1.8833H2C2 1.0533 2.67 0.383301 3.5 0.383301H10.5C11.33 0.383301 12 1.0533 12 1.8833Z" fill={colorCode} />
    </svg>
  );
}
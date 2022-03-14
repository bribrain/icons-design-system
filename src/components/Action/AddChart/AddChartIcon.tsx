import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAddChartIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddChartIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAddChartIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 8.3833C8 7.8333 8.45 7.3833 9 7.3833C9.55 7.3833 10 7.8333 10 8.3833V15.3833H8V8.3833ZM17 11.3833C16.45 11.3833 16 11.8333 16 12.3833V17.3833H2V3.3833H7C7.55 3.3833 8 2.9333 8 2.3833C8 1.8333 7.55 1.3833 7 1.3833H2C0.9 1.3833 0 2.2833 0 3.3833V17.3833C0 18.4833 0.9 19.3833 2 19.3833H16C17.1 19.3833 18 18.4833 18 17.3833V12.3833C18 11.8333 17.55 11.3833 17 11.3833ZM18 3.3833H16V1.3833C16 0.833301 15.55 0.383301 15 0.383301C14.45 0.383301 14 0.833301 14 1.3833V3.3833H12C11.45 3.3833 11 3.8333 11 4.3833C11 4.9333 11.45 5.3833 12 5.3833H14V7.3833C14 7.9333 14.45 8.3833 15 8.3833C15.55 8.3833 16 7.9333 16 7.3833V5.3833H18C18.55 5.3833 19 4.9333 19 4.3833C19 3.8333 18.55 3.3833 18 3.3833ZM13 11.3833C12.45 11.3833 12 11.8333 12 12.3833V15.3833H14V12.3833C14 11.8333 13.55 11.3833 13 11.3833ZM4 10.3833V15.3833H6V10.3833C6 9.8333 5.55 9.3833 5 9.3833C4.45 9.3833 4 9.8333 4 10.3833Z" fill={colorCode} />
    </svg>
  );
}
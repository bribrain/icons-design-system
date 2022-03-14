import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPermContactCalenderProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PermContactCalenderIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPermContactCalenderProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2.3833H15V1.3833C15 0.833301 14.55 0.383301 14 0.383301C13.45 0.383301 13 0.833301 13 1.3833V2.3833H5V1.3833C5 0.833301 4.55 0.383301 4 0.383301C3.45 0.383301 3 0.833301 3 1.3833V2.3833H2C0.89 2.3833 0 3.2833 0 4.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H16C17.1 20.3833 18 19.4833 18 18.3833V4.3833C18 3.2833 17.1 2.3833 16 2.3833ZM9 5.3833C10.66 5.3833 12 6.7233 12 8.3833C12 10.0433 10.66 11.3833 9 11.3833C7.34 11.3833 6 10.0433 6 8.3833C6 6.7233 7.34 5.3833 9 5.3833ZM15 17.3833H3V16.3833C3 14.3833 7 13.2833 9 13.2833C11 13.2833 15 14.3833 15 16.3833V17.3833Z" fill={colorCode} />
    </svg>
  );
}
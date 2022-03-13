import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPregnantWomenProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PregnantWomenIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPregnantWomenProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 8 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 2.3833C1 1.2733 1.89 0.383301 3 0.383301C4.11 0.383301 5 1.2733 5 2.3833C5 3.4933 4.11 4.3833 3 4.3833C1.89 4.3833 1 3.4933 1 2.3833ZM8 11.3833C7.99 10.0433 7.17 8.8733 6 8.3833C6 6.6733 4.58 5.3033 2.84 5.3833C1.22 5.4733 0 6.9233 0 8.5433V14.3833C0 14.9333 0.45 15.3833 1 15.3833H2V18.8833C2 19.7133 2.67 20.3833 3.5 20.3833C4.33 20.3833 5 19.7133 5 18.8833V15.3833H7C7.55 15.3833 8 14.9333 8 14.3833V11.3833Z" fill={colorCode} />
    </svg>
  );
}
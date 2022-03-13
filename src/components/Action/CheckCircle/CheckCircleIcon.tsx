import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICheckCircleProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CheckCircleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICheckCircleProps) {
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
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM7.29 14.6733L3.7 11.0833C3.31 10.6933 3.31 10.0633 3.7 9.6733C4.09 9.2833 4.72 9.2833 5.11 9.6733L8 12.5533L14.88 5.6733C15.27 5.2833 15.9 5.2833 16.29 5.6733C16.68 6.0633 16.68 6.6933 16.29 7.0833L8.7 14.6733C8.32 15.0633 7.68 15.0633 7.29 14.6733Z" fill={colorCode} />
    </svg>
  );
}
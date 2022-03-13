import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICheckCircleOutlineProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CheckCircleOutlineIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICheckCircleOutlineProps) {
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
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM10 18.3833C5.59 18.3833 2 14.7933 2 10.3833C2 5.9733 5.59 2.3833 10 2.3833C14.41 2.3833 18 5.9733 18 10.3833C18 14.7933 14.41 18.3833 10 18.3833ZM13.88 6.6733L8 12.5533L6.12 10.6733C5.73 10.2833 5.1 10.2833 4.71 10.6733C4.32 11.0633 4.32 11.6933 4.71 12.0833L7.3 14.6733C7.69 15.0633 8.32 15.0633 8.71 14.6733L15.3 8.0833C15.69 7.6933 15.69 7.0633 15.3 6.6733C14.91 6.2833 14.27 6.2833 13.88 6.6733Z" fill={colorCode} />
    </svg>
  );
}
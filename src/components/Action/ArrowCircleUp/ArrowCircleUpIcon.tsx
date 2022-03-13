import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IArrowCircleUpProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ArrowCircleUpIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IArrowCircleUpProps) {
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
      <path d="M10 18.3833C5.59 18.3833 2 14.7933 2 10.3833C2 5.9733 5.59 2.3833 10 2.3833C14.41 2.3833 18 5.9733 18 10.3833C18 14.7933 14.41 18.3833 10 18.3833ZM10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833ZM9 10.3833V13.3833C9 13.9333 9.45 14.3833 10 14.3833C10.55 14.3833 11 13.9333 11 13.3833V10.3833H12.79C13.24 10.3833 13.46 9.8433 13.14 9.5333L10.35 6.7433C10.15 6.5433 9.84 6.5433 9.64 6.7433L6.85 9.5333C6.54 9.8433 6.76 10.3833 7.21 10.3833H9Z" fill={colorCode} />
    </svg>
  );
}
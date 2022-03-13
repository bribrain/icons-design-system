import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IOfflinePinProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function OfflinePinIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IOfflinePinProps) {
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
      <path d="M10 0.383301C4.5 0.383301 0 4.8833 0 10.3833C0 15.8833 4.5 20.3833 10 20.3833C15.5 20.3833 20 15.8833 20 10.3833C20 4.8833 15.5 0.383301 10 0.383301ZM14 16.3833H6C5.45 16.3833 5 15.9333 5 15.3833C5 14.8333 5.45 14.3833 6 14.3833H14C14.55 14.3833 15 14.8333 15 15.3833C15 15.9333 14.55 16.3833 14 16.3833ZM7.59 11.6733L5.7 9.7833C5.31 9.3933 5.31 8.7733 5.7 8.3833C6.09 7.9933 6.71 7.9933 7.1 8.3833L8.3 9.5833L12.9 4.9833C13.29 4.5933 13.91 4.5933 14.3 4.9833C14.69 5.3733 14.69 5.9933 14.3 6.3833L9.01 11.6733C8.62 12.0633 7.98 12.0633 7.59 11.6733Z" fill={colorCode} />
    </svg>
  );
}
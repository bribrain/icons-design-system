import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPlaylistPlayIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PlaylistPlayIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPlaylistPlayIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 4.3833H11C11.55 4.3833 12 4.8333 12 5.3833C12 5.9333 11.55 6.3833 11 6.3833H1C0.45 6.3833 0 5.9333 0 5.3833C0 4.8333 0.45 4.3833 1 4.3833ZM1 0.383301H11C11.55 0.383301 12 0.833301 12 1.3833C12 1.9333 11.55 2.3833 11 2.3833H1C0.45 2.3833 0 1.9333 0 1.3833C0 0.833301 0.45 0.383301 1 0.383301ZM1 8.3833H7C7.55 8.3833 8 8.8333 8 9.3833C8 9.9333 7.55 10.3833 7 10.3833H1C0.45 10.3833 0 9.9333 0 9.3833C0 8.8333 0.45 8.3833 1 8.3833ZM10 9.2633V13.4933C10 13.8833 10.42 14.1233 10.76 13.9233L14.29 11.8033C14.61 11.6133 14.61 11.1433 14.29 10.9433L10.76 8.8233C10.42 8.6333 10 8.8733 10 9.2633Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPlaylistAddIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PlaylistAddIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPlaylistAddIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 4.3833H1C0.45 4.3833 0 4.8333 0 5.3833C0 5.9333 0.45 6.3833 1 6.3833H11C11.55 6.3833 12 5.9333 12 5.3833C12 4.8333 11.55 4.3833 11 4.3833ZM11 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833C0 1.9333 0.45 2.3833 1 2.3833H11C11.55 2.3833 12 1.9333 12 1.3833C12 0.833301 11.55 0.383301 11 0.383301ZM16 8.3833V5.3833C16 4.8333 15.55 4.3833 15 4.3833C14.45 4.3833 14 4.8333 14 5.3833V8.3833H11C10.45 8.3833 10 8.8333 10 9.3833C10 9.9333 10.45 10.3833 11 10.3833H14V13.3833C14 13.9333 14.45 14.3833 15 14.3833C15.55 14.3833 16 13.9333 16 13.3833V10.3833H19C19.55 10.3833 20 9.9333 20 9.3833C20 8.8333 19.55 8.3833 19 8.3833H16ZM1 10.3833H7C7.55 10.3833 8 9.9333 8 9.3833C8 8.8333 7.55 8.3833 7 8.3833H1C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833Z" fill={colorCode} />
    </svg>
  );
}
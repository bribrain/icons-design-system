import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPlaylistAddCheckIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PlaylistAddCheckIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPlaylistAddCheckIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 4.3833H1C0.45 4.3833 0 4.8333 0 5.3833C0 5.9333 0.45 6.3833 1 6.3833H11C11.55 6.3833 12 5.9333 12 5.3833C12 4.8333 11.55 4.3833 11 4.3833ZM11 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833C0 1.9333 0.45 2.3833 1 2.3833H11C11.55 2.3833 12 1.9333 12 1.3833C12 0.833301 11.55 0.383301 11 0.383301ZM1 10.3833H7C7.55 10.3833 8 9.9333 8 9.3833C8 8.8333 7.55 8.3833 7 8.3833H1C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833ZM20.21 6.5933L20.3 6.6833C20.69 7.0733 20.69 7.7033 20.3 8.0933L14.72 13.6833C14.33 14.0733 13.7 14.0733 13.31 13.6833L10.22 10.5933C9.83 10.2033 9.83 9.5733 10.22 9.1833L10.31 9.0933C10.7 8.7033 11.33 8.7033 11.72 9.0933L14.02 11.3933L18.8 6.6033C19.18 6.2033 19.82 6.2033 20.21 6.5933Z" fill={colorCode} />
    </svg>
  );
}
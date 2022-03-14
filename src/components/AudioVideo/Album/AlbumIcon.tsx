import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAlbumIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AlbumIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAlbumIconProps) {
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
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM10 14.8833C7.51 14.8833 5.5 12.8733 5.5 10.3833C5.5 7.8933 7.51 5.8833 10 5.8833C12.49 5.8833 14.5 7.8933 14.5 10.3833C14.5 12.8733 12.49 14.8833 10 14.8833ZM10 9.3833C9.45 9.3833 9 9.8333 9 10.3833C9 10.9333 9.45 11.3833 10 11.3833C10.55 11.3833 11 10.9333 11 10.3833C11 9.8333 10.55 9.3833 10 9.3833Z" fill={colorCode} />
    </svg>
  );
}
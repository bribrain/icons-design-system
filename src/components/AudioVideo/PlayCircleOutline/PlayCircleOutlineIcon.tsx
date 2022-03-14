import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPlayCircleOutlineIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PlayCircleOutlineIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPlayCircleOutlineIconProps) {
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
      <path d="M8.8 14.2833L13.47 10.7833C13.74 10.5833 13.74 10.1833 13.47 9.9833L8.8 6.4833C8.47 6.2333 8 6.4733 8 6.8833V13.8833C8 14.2933 8.47 14.5333 8.8 14.2833ZM10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM10 18.3833C5.59 18.3833 2 14.7933 2 10.3833C2 5.9733 5.59 2.3833 10 2.3833C14.41 2.3833 18 5.9733 18 10.3833C18 14.7933 14.41 18.3833 10 18.3833Z" fill={colorCode} />
    </svg>
  );
}
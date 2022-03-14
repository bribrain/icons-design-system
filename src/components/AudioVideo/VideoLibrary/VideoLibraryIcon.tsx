import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVideoLibraryIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VideoLibraryIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVideoLibraryIconProps) {
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
      <path d="M1 4.3833C0.45 4.3833 0 4.8333 0 5.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H15C15.55 20.3833 16 19.9333 16 19.3833C16 18.8333 15.55 18.3833 15 18.3833H3C2.45 18.3833 2 17.9333 2 17.3833V5.3833C2 4.8333 1.55 4.3833 1 4.3833ZM18 0.383301H6C4.9 0.383301 4 1.2833 4 2.3833V14.3833C4 15.4833 4.9 16.3833 6 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301ZM10 12.8833V3.8833L15.47 7.9833C15.74 8.1833 15.74 8.5833 15.47 8.7833L10 12.8833Z" fill={colorCode} />
    </svg>
  );
}
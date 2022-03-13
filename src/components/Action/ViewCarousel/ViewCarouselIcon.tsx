import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IViewCarouselProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewCarouselIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IViewCarouselProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 15.3833H14C14.55 15.3833 15 14.9333 15 14.3833V1.3833C15 0.833301 14.55 0.383301 14 0.383301H6C5.45 0.383301 5 0.833301 5 1.3833V14.3833C5 14.9333 5.45 15.3833 6 15.3833ZM1 13.3833H3C3.55 13.3833 4 12.9333 4 12.3833V3.3833C4 2.8333 3.55 2.3833 3 2.3833H1C0.45 2.3833 0 2.8333 0 3.3833V12.3833C0 12.9333 0.45 13.3833 1 13.3833ZM16 3.3833V12.3833C16 12.9333 16.45 13.3833 17 13.3833H19C19.55 13.3833 20 12.9333 20 12.3833V3.3833C20 2.8333 19.55 2.3833 19 2.3833H17C16.45 2.3833 16 2.8333 16 3.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFeaturedPlayListIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FeaturedPlayListIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFeaturedPlayListIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H20C21.1 18.3833 22 17.4833 22 16.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM10 8.3833H3C2.45 8.3833 2 7.9333 2 7.3833C2 6.8333 2.45 6.3833 3 6.3833H10C10.55 6.3833 11 6.8333 11 7.3833C11 7.9333 10.55 8.3833 10 8.3833ZM10 4.3833H3C2.45 4.3833 2 3.9333 2 3.3833C2 2.8333 2.45 2.3833 3 2.3833H10C10.55 2.3833 11 2.8333 11 3.3833C11 3.9333 10.55 4.3833 10 4.3833Z" fill={colorCode} />
    </svg>
  );
}
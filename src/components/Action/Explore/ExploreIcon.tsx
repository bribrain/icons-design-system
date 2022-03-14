import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IExploreProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ExploreIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IExploreProps) {
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
      <path d="M10 9.2833C9.39 9.2833 8.9 9.7733 8.9 10.3833C8.9 10.9933 9.39 11.4833 10 11.4833C10.61 11.4833 11.1 10.9933 11.1 10.3833C11.1 9.7733 10.61 9.2833 10 9.2833ZM10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM12.19 12.5733L4 16.3833L7.81 8.1933L16 4.3833L12.19 12.5733Z" fill={colorCode} />
    </svg>
  );
}
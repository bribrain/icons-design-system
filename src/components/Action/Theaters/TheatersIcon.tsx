import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITheatersProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TheatersIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITheatersProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 1.3833V2.3833H12V1.3833C12 0.833301 11.55 0.383301 11 0.383301H5C4.45 0.383301 4 0.833301 4 1.3833V2.3833H2V1.3833C2 0.833301 1.55 0.383301 1 0.383301C0.45 0.383301 0 0.833301 0 1.3833V17.3833C0 17.9333 0.45 18.3833 1 18.3833C1.55 18.3833 2 17.9333 2 17.3833V16.3833H4V17.3833C4 17.9333 4.45 18.3833 5 18.3833H11C11.55 18.3833 12 17.9333 12 17.3833V16.3833H14V17.3833C14 17.9333 14.45 18.3833 15 18.3833C15.55 18.3833 16 17.9333 16 17.3833V1.3833C16 0.833301 15.55 0.383301 15 0.383301C14.45 0.383301 14 0.833301 14 1.3833ZM4 14.3833H2V12.3833H4V14.3833ZM4 10.3833H2V8.3833H4V10.3833ZM4 6.3833H2V4.3833H4V6.3833ZM14 14.3833H12V12.3833H14V14.3833ZM14 10.3833H12V8.3833H14V10.3833ZM14 6.3833H12V4.3833H14V6.3833Z" fill={colorCode} />
    </svg>
  );
}
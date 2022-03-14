import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IMusicVideoIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MusicVideoIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IMusicVideoIconProps) {
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
      <path d="M20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H20C21.1 18.3833 22 17.4833 22 16.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM19 16.3833H3C2.45 16.3833 2 15.9333 2 15.3833V3.3833C2 2.8333 2.45 2.3833 3 2.3833H19C19.55 2.3833 20 2.8333 20 3.3833V15.3833C20 15.9333 19.55 16.3833 19 16.3833ZM7.05 12.9233C6.72 11.0233 8.16 9.3833 10 9.3833C10.35 9.3833 10.69 9.4533 11 9.5633V5.3833C11 4.2833 11.9 3.3833 13 3.3833H15C15.55 3.3833 16 3.8333 16 4.3833C16 4.9333 15.55 5.3833 15 5.3833H13V12.4133C12.98 14.2333 11.34 15.6733 9.45 15.3333C8.24 15.1233 7.25 14.1333 7.05 12.9233Z" fill={colorCode} />
    </svg>
  );
}
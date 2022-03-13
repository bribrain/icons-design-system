import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPictureInPictureProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PictureInPictureIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPictureInPictureProps) {
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
      <path d="M17 4.3833H11C10.45 4.3833 10 4.8333 10 5.3833V9.3833C10 9.9333 10.45 10.3833 11 10.3833H17C17.55 10.3833 18 9.9333 18 9.3833V5.3833C18 4.8333 17.55 4.3833 17 4.3833ZM20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3633 2 18.3633H20C21.1 18.3633 22 17.4833 22 16.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM19 16.3933H3C2.45 16.3933 2 15.9433 2 15.3933V3.3633C2 2.8133 2.45 2.3633 3 2.3633H19C19.55 2.3633 20 2.8133 20 3.3633V15.3933C20 15.9433 19.55 16.3933 19 16.3933Z" fill={colorCode} />
    </svg>
  );
}
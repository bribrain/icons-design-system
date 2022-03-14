import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPauseCircleOutlineIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PauseCircleOutlineIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPauseCircleOutlineIconProps) {
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
      <path d="M8 14.3833C8.55 14.3833 9 13.9333 9 13.3833V7.3833C9 6.8333 8.55 6.3833 8 6.3833C7.45 6.3833 7 6.8333 7 7.3833V13.3833C7 13.9333 7.45 14.3833 8 14.3833ZM10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM10 18.3833C5.59 18.3833 2 14.7933 2 10.3833C2 5.9733 5.59 2.3833 10 2.3833C14.41 2.3833 18 5.9733 18 10.3833C18 14.7933 14.41 18.3833 10 18.3833ZM12 14.3833C12.55 14.3833 13 13.9333 13 13.3833V7.3833C13 6.8333 12.55 6.3833 12 6.3833C11.45 6.3833 11 6.8333 11 7.3833V13.3833C11 13.9333 11.45 14.3833 12 14.3833Z" fill={colorCode} />
    </svg>
  );
}
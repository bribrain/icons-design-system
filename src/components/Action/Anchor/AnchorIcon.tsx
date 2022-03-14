import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAnchorProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AnchorIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAnchorProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 7.3833V6.2033C11.16 5.7833 12 4.6833 12 3.3833C12 1.7333 10.65 0.383301 9 0.383301C7.35 0.383301 6 1.7333 6 3.3833C6 4.6833 6.84 5.7833 8 6.2033V7.3833H6C5.45 7.3833 5 7.8333 5 8.3833C5 8.9333 5.45 9.3833 6 9.3833H8V18.3033C5.78 17.9733 3.41 16.6233 2.45 14.9333L3.59 13.7933C3.81 13.5733 3.78 13.2233 3.54 13.0433L0.8 10.9833C0.47 10.7333 0 10.9733 0 11.3833V13.3833C0 17.2633 4.92 20.3833 9 20.3833C13.08 20.3833 18 17.2633 18 13.3833V11.3833C18 10.9733 17.53 10.7333 17.2 10.9833L14.46 13.0333C14.22 13.2133 14.19 13.5733 14.41 13.7833L15.55 14.9233C14.59 16.6133 12.22 17.9633 10 18.2933V9.3833H12C12.55 9.3833 13 8.9333 13 8.3833C13 7.8333 12.55 7.3833 12 7.3833H10ZM9 2.3833C9.55 2.3833 10 2.8333 10 3.3833C10 3.9333 9.55 4.3833 9 4.3833C8.45 4.3833 8 3.9333 8 3.3833C8 2.8333 8.45 2.3833 9 2.3833Z" fill={colorCode} />
    </svg>
  );
}
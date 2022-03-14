import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IQueueMusicIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function QueueMusicIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IQueueMusicIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833C0 1.9333 0.45 2.3833 1 2.3833H11C11.55 2.3833 12 1.9333 12 1.3833C12 0.833301 11.55 0.383301 11 0.383301ZM11 4.3833H1C0.45 4.3833 0 4.8333 0 5.3833C0 5.9333 0.45 6.3833 1 6.3833H11C11.55 6.3833 12 5.9333 12 5.3833C12 4.8333 11.55 4.3833 11 4.3833ZM1 10.3833H7C7.55 10.3833 8 9.9333 8 9.3833C8 8.8333 7.55 8.3833 7 8.3833H1C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833ZM16 0.383301C14.9 0.383301 14 1.2833 14 2.3833V8.5633C13.69 8.4533 13.35 8.3833 13 8.3833C11.16 8.3833 9.72 10.0233 10.05 11.9233C10.26 13.1333 11.25 14.1233 12.46 14.3333C14.36 14.6633 16 13.2233 16 11.3833V2.3833H18C18.55 2.3833 19 1.9333 19 1.3833C19 0.833301 18.55 0.383301 18 0.383301H16Z" fill={colorCode} />
    </svg>
  );
}
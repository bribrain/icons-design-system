import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVideoCallIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VideoCallIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVideoCallIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 4.8833V1.3833C14 0.833301 13.55 0.383301 13 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V11.3833C0 11.9333 0.45 12.3833 1 12.3833H13C13.55 12.3833 14 11.9333 14 11.3833V7.8833L16.29 10.1733C16.92 10.8033 18 10.3533 18 9.4633V3.2933C18 2.4033 16.92 1.9533 16.29 2.5833L14 4.8833ZM10 7.3833H8V9.3833C8 9.9333 7.55 10.3833 7 10.3833C6.45 10.3833 6 9.9333 6 9.3833V7.3833H4C3.45 7.3833 3 6.9333 3 6.3833C3 5.8333 3.45 5.3833 4 5.3833H6V3.3833C6 2.8333 6.45 2.3833 7 2.3833C7.55 2.3833 8 2.8333 8 3.3833V5.3833H10C10.55 5.3833 11 5.8333 11 6.3833C11 6.9333 10.55 7.3833 10 7.3833Z" fill={colorCode} />
    </svg>
  );
}
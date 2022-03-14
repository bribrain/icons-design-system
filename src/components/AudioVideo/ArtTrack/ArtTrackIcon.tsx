import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IArtTrackIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ArtTrackIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IArtTrackIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 6.3833H13C12.45 6.3833 12 5.9333 12 5.3833C12 4.8333 12.45 4.3833 13 4.3833H19C19.55 4.3833 20 4.8333 20 5.3833C20 5.9333 19.55 6.3833 19 6.3833ZM19 0.383301H13C12.45 0.383301 12 0.833301 12 1.3833C12 1.9333 12.45 2.3833 13 2.3833H19C19.55 2.3833 20 1.9333 20 1.3833C20 0.833301 19.55 0.383301 19 0.383301ZM13 10.3833H19C19.55 10.3833 20 9.9333 20 9.3833C20 8.8333 19.55 8.3833 19 8.3833H13C12.45 8.3833 12 8.8333 12 9.3833C12 9.9333 12.45 10.3833 13 10.3833ZM10 2.3833V8.3833C10 9.4833 9.1 10.3833 8 10.3833H2C0.9 10.3833 0 9.4833 0 8.3833V2.3833C0 1.2833 0.9 0.383301 2 0.383301H8C9.1 0.383301 10 1.2833 10 2.3833ZM7.9 7.5833L6.64 5.9033C6.44 5.6433 6.05 5.6333 5.84 5.8933L4.5 7.6433L3.65 6.6133C3.45 6.3633 3.07 6.3733 2.87 6.6233L2.13 7.5733C1.87 7.9033 2.11 8.3833 2.52 8.3833H7.5C7.91 8.3833 8.15 7.9133 7.9 7.5833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IOfflineBoltProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function OfflineBoltIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IOfflineBoltProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M10 0.40332C4.49 0.40332 0.0200043 4.87332 0.0200043 10.3833C0.0200043 15.8933 4.49 20.3633 10 20.3633C15.51 20.3633 19.98 15.8933 19.98 10.3833C19.98 4.87332 15.51 0.40332 10 0.40332ZM9.48 16.2633V12.1233H6.82C6.45 12.1233 6.2 11.7233 6.38 11.3933L10.06 4.22332C10.29 3.75332 11 3.92332 11 4.45332V8.64332H13.54C13.91 8.64332 14.15 9.03332 13.99 9.36332L10.43 16.4833C10.19 16.9633 9.48 16.7933 9.48 16.2633Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IMicIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MicIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IMicIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.99999 12.3833C8.65999 12.3833 9.99999 11.0433 9.99999 9.3833V3.3833C9.99999 1.7233 8.65999 0.383301 6.99999 0.383301C5.33999 0.383301 3.99999 1.7233 3.99999 3.3833V9.3833C3.99999 11.0433 5.33999 12.3833 6.99999 12.3833ZM12.91 9.3833C12.42 9.3833 12.01 9.7433 11.93 10.2333C11.52 12.5833 9.46999 14.3833 6.99999 14.3833C4.52999 14.3833 2.47999 12.5833 2.06999 10.2333C1.98999 9.7433 1.57999 9.3833 1.08999 9.3833C0.479987 9.3833 -1.35005e-05 9.9233 0.0899865 10.5233C0.579987 13.5233 2.97999 15.8733 5.99999 16.3033V18.3833C5.99999 18.9333 6.44999 19.3833 6.99999 19.3833C7.54999 19.3833 7.99999 18.9333 7.99999 18.3833V16.3033C11.02 15.8733 13.42 13.5233 13.91 10.5233C14.01 9.9233 13.52 9.3833 12.91 9.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IWatchLaterProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WatchLaterIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IWatchLaterProps) {
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
      <path d="M10 0.383301C4.5 0.383301 0 4.8833 0 10.3833C0 15.8833 4.5 20.3833 10 20.3833C15.5 20.3833 20 15.8833 20 10.3833C20 4.8833 15.5 0.383301 10 0.383301ZM13.55 14.1833L9.47 11.6733C9.17 11.4933 8.99 11.1733 8.99 10.8233V6.1333C9 5.7233 9.34 5.3833 9.75 5.3833C10.16 5.3833 10.5 5.7233 10.5 6.1333V10.5833L14.34 12.8933C14.7 13.1133 14.82 13.5833 14.6 13.9433C14.38 14.2933 13.91 14.4033 13.55 14.1833Z" fill={colorCode} />
    </svg>
  );
}
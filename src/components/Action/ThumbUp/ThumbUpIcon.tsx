import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IThumbUpProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ThumbUpIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IThumbUpProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.12 0.4433L6.58 5.9833C6.21 6.3533 6 6.8633 6 7.3933V17.3833C6 18.4833 6.9 19.3833 8 19.3833H17C17.8 19.3833 18.52 18.9033 18.84 18.1733L22.1 10.5633C22.94 8.5833 21.49 6.3833 19.34 6.3833H13.69L14.64 1.8033C14.74 1.3033 14.59 0.7933 14.23 0.4333C13.64 -0.1467 12.7 -0.1467 12.12 0.4433ZM2 19.3833C3.1 19.3833 4 18.4833 4 17.3833V9.3833C4 8.2833 3.1 7.3833 2 7.3833C0.9 7.3833 0 8.2833 0 9.3833V17.3833C0 18.4833 0.9 19.3833 2 19.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPermCameraMicProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PermCameraMicIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPermCameraMicProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 2.3833H14.83L13.59 1.0333C13.22 0.623301 12.68 0.383301 12.12 0.383301H7.88C7.32 0.383301 6.78 0.623301 6.4 1.0333L5.17 2.3833H2C0.9 2.3833 0 3.2833 0 4.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H9V16.2933C6.55 15.8733 4.59 13.9733 4.11 11.5433C3.99 10.9333 4.49 10.3833 5.1 10.3833C5.59 10.3833 5.98 10.7333 6.08 11.2133C6.47 13.0233 8.07 14.3833 10 14.3833C11.93 14.3833 13.53 13.0233 13.91 11.2133C14.01 10.7333 14.41 10.3833 14.89 10.3833C15.5 10.3833 16 10.9333 15.88 11.5433C15.4 13.9733 13.44 15.8833 10.99 16.2933V18.3833H17.99C19.09 18.3833 19.99 17.4833 19.99 16.3833V4.3833C20 3.2833 19.1 2.3833 18 2.3833ZM12 10.3833C12 11.4833 11.1 12.3833 10 12.3833C8.9 12.3833 8 11.4833 8 10.3833V6.3833C8 5.2833 8.9 4.3833 10 4.3833C11.1 4.3833 12 5.2833 12 6.3833V10.3833Z" fill={colorCode} />
    </svg>
  );
}
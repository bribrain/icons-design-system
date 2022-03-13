import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IZoomOutProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ZoomOutIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IZoomOutProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.5 11.3833H11.71L11.43 11.1133C12.63 9.7133 13.25 7.8033 12.91 5.7733C12.44 2.9933 10.12 0.773301 7.32 0.433301C3.09 -0.0866992 -0.47 3.4733 0.05 7.7033C0.39 10.5033 2.61 12.8233 5.39 13.2933C7.42 13.6333 9.33 13.0133 10.73 11.8133L11 12.0933V12.8833L15.26 17.1333C15.67 17.5433 16.33 17.5433 16.74 17.1333L16.75 17.1233C17.16 16.7133 17.16 16.0533 16.75 15.6433L12.5 11.3833ZM6.5 11.3833C4.01 11.3833 2 9.3733 2 6.8833C2 4.3933 4.01 2.3833 6.5 2.3833C8.99 2.3833 11 4.3933 11 6.8833C11 9.3733 8.99 11.3833 6.5 11.3833ZM4.5 6.3833H8.5C8.78 6.3833 9 6.6033 9 6.8833C9 7.1633 8.78 7.3833 8.5 7.3833H4.5C4.22 7.3833 4 7.1633 4 6.8833C4 6.6033 4.22 6.3833 4.5 6.3833Z" fill={colorCode} />
    </svg>
  );
}
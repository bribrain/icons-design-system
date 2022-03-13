import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVisibilityOffProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VisibilityOffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVisibilityOffProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 3.88329C13.76 3.88329 16 6.12329 16 8.88329C16 9.39329 15.9 9.88329 15.76 10.3433L18.82 13.4033C20.21 12.1733 21.31 10.6333 22 8.87329C20.27 4.49329 16 1.38329 11 1.38329C9.73 1.38329 8.51 1.58329 7.36 1.95329L9.53 4.12329C10 3.98329 10.49 3.88329 11 3.88329ZM1.71 0.543293C1.32 0.933293 1.32 1.56329 1.71 1.95329L3.68 3.92329C2.06 5.21329 0.77 6.91329 0 8.88329C1.73 13.2733 6 16.3833 11 16.3833C12.52 16.3833 13.97 16.0833 15.31 15.5633L18.03 18.2833C18.42 18.6733 19.05 18.6733 19.44 18.2833C19.83 17.8933 19.83 17.2633 19.44 16.8733L3.13 0.543293C2.74 0.153293 2.1 0.153293 1.71 0.543293ZM11 13.8833C8.24 13.8833 6 11.6433 6 8.88329C6 8.11329 6.18 7.38329 6.49 6.74329L8.06 8.31329C8.03 8.49329 8 8.68329 8 8.88329C8 10.5433 9.34 11.8833 11 11.8833C11.2 11.8833 11.38 11.8533 11.57 11.8133L13.14 13.3833C12.49 13.7033 11.77 13.8833 11 13.8833ZM13.97 8.55329C13.82 7.15329 12.72 6.06329 11.33 5.91329L13.97 8.55329Z" fill={colorCode} />
    </svg>
  );
}
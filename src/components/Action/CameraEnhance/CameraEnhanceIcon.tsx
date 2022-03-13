import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICameraEnhanceProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CameraEnhanceIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICameraEnhanceProps) {
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
      <path d="M18 2.3833H14.83L13.59 1.0333C13.22 0.623301 12.68 0.383301 12.12 0.383301H7.88C7.32 0.383301 6.78 0.623301 6.4 1.0333L5.17 2.3833H2C0.9 2.3833 0 3.2833 0 4.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H18C19.1 18.3833 20 17.4833 20 16.3833V4.3833C20 3.2833 19.1 2.3833 18 2.3833ZM10 15.3833C7.24 15.3833 5 13.1433 5 10.3833C5 7.6233 7.24 5.3833 10 5.3833C12.76 5.3833 15 7.6233 15 10.3833C15 13.1433 12.76 15.3833 10 15.3833ZM10 6.3833L8.75 9.1333L6 10.3833L8.75 11.6333L10 14.3833L11.25 11.6333L14 10.3833L11.25 9.1333L10 6.3833Z" fill={colorCode} />
    </svg>
  );
}
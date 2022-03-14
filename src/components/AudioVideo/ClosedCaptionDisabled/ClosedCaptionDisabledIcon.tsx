import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IClosedCaptionDisabledIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ClosedCaptionDisabledIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IClosedCaptionDisabledIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.83 1.38334H18C19.1 1.38334 20 2.28334 20 3.38334V15.3833C20 15.4333 19.99 15.4833 19.98 15.5433L16.6 12.1633C16.84 11.9733 17 11.7033 17 11.3833V10.8833C17 10.6033 16.78 10.3833 16.5 10.3833H16C15.72 10.3833 15.5 10.6033 15.5 10.8833H15.33L13.5 9.05334V7.88334H15.5C15.5 8.16334 15.72 8.38334 16 8.38334H16.5C16.78 8.38334 17 8.16334 17 7.88334V7.38334C17 6.83334 16.55 6.38334 16 6.38334H13C12.45 6.38334 12 6.83334 12 7.38334V7.55334L5.83 1.38334ZM19.49 19.2833C19.1 19.6733 18.47 19.6733 18.08 19.2833L16.18 17.3833H4C2.89 17.3833 2 16.4833 2 15.3833V3.38334C2 3.33334 2.02 3.28334 2.02 3.23334L1.1 2.31334C0.709995 1.92334 0.709995 1.29334 1.1 0.90334C1.49 0.51334 2.12 0.51334 2.51 0.90334L19.48 17.8733C19.88 18.2633 19.88 18.8933 19.49 19.2833ZM10 11.2133L9.17 10.3833H9C8.72 10.3833 8.5 10.6033 8.5 10.8833H6.5V7.88334H6.67L5.4 6.60334C5.16 6.79334 5 7.06334 5 7.38334V11.3833C5 11.9333 5.45 12.3833 6 12.3833H9C9.55 12.3833 10 11.9333 10 11.3833V11.2133Z" fill={colorCode} />
    </svg>
  );
}
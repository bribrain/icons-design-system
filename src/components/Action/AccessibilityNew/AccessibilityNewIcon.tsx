import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAccessibilityNewIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AccessibilityNewIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAccessibilityNewIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.75 5.3733C17.61 4.8233 17.06 4.5033 16.51 4.6233C14.13 5.1533 11.48 5.3833 8.99999 5.3833C6.51999 5.3833 3.86999 5.1533 1.48999 4.6233C0.939994 4.5033 0.389994 4.8233 0.249994 5.3733C0.109994 5.9333 0.449994 6.5033 0.999994 6.6333C2.60999 6.9933 4.34999 7.2433 5.99999 7.3833V19.3833C5.99999 19.9333 6.44999 20.3833 6.99999 20.3833C7.54999 20.3833 7.99999 19.9333 7.99999 19.3833V14.3833H9.99999V19.3833C9.99999 19.9333 10.45 20.3833 11 20.3833C11.55 20.3833 12 19.9333 12 19.3833V7.3833C13.65 7.2433 15.39 6.9933 16.99 6.6333C17.55 6.5033 17.89 5.9333 17.75 5.3733ZM8.99999 4.3833C10.1 4.3833 11 3.4833 11 2.3833C11 1.2833 10.1 0.383301 8.99999 0.383301C7.89999 0.383301 6.99999 1.2833 6.99999 2.3833C6.99999 3.4833 7.89999 4.3833 8.99999 4.3833Z" fill={colorCode} />
    </svg>
  );
}
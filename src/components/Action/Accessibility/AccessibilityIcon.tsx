import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAccessibilityIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AccessibilityIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAccessibilityIconProps) {
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
      <path d="M9 0.383301C10.1 0.383301 11 1.2833 11 2.3833C11 3.4833 10.1 4.3833 9 4.3833C7.9 4.3833 7 3.4833 7 2.3833C7 1.2833 7.9 0.383301 9 0.383301ZM17 7.3833H12V19.3833C12 19.9333 11.55 20.3833 11 20.3833C10.45 20.3833 10 19.9333 10 19.3833V14.3833H8V19.3833C8 19.9333 7.55 20.3833 7 20.3833C6.45 20.3833 6 19.9333 6 19.3833V7.3833H1C0.45 7.3833 0 6.9333 0 6.3833C0 5.8333 0.45 5.3833 1 5.3833H17C17.55 5.3833 18 5.8333 18 6.3833C18 6.9333 17.55 7.3833 17 7.3833Z" fill={colorCode} />
    </svg>
  );
}
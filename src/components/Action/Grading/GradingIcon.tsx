import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IGradingProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function GradingIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IGradingProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 4.3833H15C15.55 4.3833 16 4.8333 16 5.3833C16 5.9333 15.55 6.3833 15 6.3833H1C0.45 6.3833 0 5.9333 0 5.3833C0 4.8333 0.45 4.3833 1 4.3833Z" fill={colorCode} />
      <path d="M1 10.3833H15C15.55 10.3833 16 9.9333 16 9.3833C16 8.8333 15.55 8.3833 15 8.3833H1C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833Z" fill={colorCode} />
      <path d="M1 14.3833H6C6.55 14.3833 7 13.9333 7 13.3833C7 12.8333 6.55 12.3833 6 12.3833H1C0.45 12.3833 0 12.8333 0 13.3833C0 13.9333 0.45 14.3833 1 14.3833Z" fill={colorCode} />
      <path d="M1 18.3833H6C6.55 18.3833 7 17.9333 7 17.3833C7 16.8333 6.55 16.3833 6 16.3833H1C0.45 16.3833 0 16.8333 0 17.3833C0 17.9333 0.45 18.3833 1 18.3833Z" fill={colorCode} />
      <path d="M11.41 15.5533L10.7 14.8433C10.31 14.4533 9.68 14.4533 9.29 14.8433C8.9 15.2333 8.9 15.8633 9.29 16.2533L10.71 17.6733C11.1 18.0633 11.73 18.0633 12.12 17.6733L15.29 14.5033C15.68 14.1133 15.68 13.4833 15.29 13.0933C14.9 12.7033 14.27 12.7033 13.88 13.0933L11.41 15.5533Z" fill={colorCode} />
      <path d="M0 1.3833C0 1.9333 0.45 2.3833 1 2.3833H15C15.55 2.3833 16 1.9333 16 1.3833C16 0.833301 15.55 0.383301 15 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833Z" fill={colorCode} />
    </svg>
  );
}
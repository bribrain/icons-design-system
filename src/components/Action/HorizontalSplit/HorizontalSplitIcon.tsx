import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHorizontalSplitProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HorizontalSplitIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHorizontalSplitProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 14.3833H17C17.55 14.3833 18 13.9333 18 13.3833V9.3833C18 8.8333 17.55 8.3833 17 8.3833H1C0.45 8.3833 0 8.8333 0 9.3833V13.3833C0 13.9333 0.45 14.3833 1 14.3833ZM1 6.3833H17C17.55 6.3833 18 5.9333 18 5.3833C18 4.8333 17.55 4.3833 17 4.3833H1C0.45 4.3833 0 4.8333 0 5.3833C0 5.9333 0.45 6.3833 1 6.3833ZM0 1.3833C0 1.9333 0.45 2.3833 1 2.3833H17C17.55 2.3833 18 1.9333 18 1.3833C18 0.833301 17.55 0.383301 17 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IViewListProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewListIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IViewListProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 9.3833H3C3.55 9.3833 4 8.9333 4 8.3833V6.3833C4 5.8333 3.55 5.3833 3 5.3833H1C0.45 5.3833 0 5.8333 0 6.3833V8.3833C0 8.9333 0.45 9.3833 1 9.3833ZM1 14.3833H3C3.55 14.3833 4 13.9333 4 13.3833V11.3833C4 10.8333 3.55 10.3833 3 10.3833H1C0.45 10.3833 0 10.8333 0 11.3833V13.3833C0 13.9333 0.45 14.3833 1 14.3833ZM1 4.3833H3C3.55 4.3833 4 3.9333 4 3.3833V1.3833C4 0.833301 3.55 0.383301 3 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V3.3833C0 3.9333 0.45 4.3833 1 4.3833ZM6 9.3833H16C16.55 9.3833 17 8.9333 17 8.3833V6.3833C17 5.8333 16.55 5.3833 16 5.3833H6C5.45 5.3833 5 5.8333 5 6.3833V8.3833C5 8.9333 5.45 9.3833 6 9.3833ZM6 14.3833H16C16.55 14.3833 17 13.9333 17 13.3833V11.3833C17 10.8333 16.55 10.3833 16 10.3833H6C5.45 10.3833 5 10.8333 5 11.3833V13.3833C5 13.9333 5.45 14.3833 6 14.3833ZM5 1.3833V3.3833C5 3.9333 5.45 4.3833 6 4.3833H16C16.55 4.3833 17 3.9333 17 3.3833V1.3833C17 0.833301 16.55 0.383301 16 0.383301H6C5.45 0.383301 5 0.833301 5 1.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IViewSidebarProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewSidebarIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IViewSidebarProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 16.3833H1C0.45 16.3833 0 15.9333 0 15.3833V1.3833C0 0.833301 0.45 0.383301 1 0.383301H13C13.55 0.383301 14 0.833301 14 1.3833V15.3833C14 15.9333 13.55 16.3833 13 16.3833ZM17 4.3833H19C19.55 4.3833 20 3.9333 20 3.3833V1.3833C20 0.833301 19.55 0.383301 19 0.383301H17C16.45 0.383301 16 0.833301 16 1.3833V3.3833C16 3.9333 16.45 4.3833 17 4.3833ZM17 16.3833H19C19.55 16.3833 20 15.9333 20 15.3833V13.3833C20 12.8333 19.55 12.3833 19 12.3833H17C16.45 12.3833 16 12.8333 16 13.3833V15.3833C16 15.9333 16.45 16.3833 17 16.3833ZM17 10.3833H19C19.55 10.3833 20 9.9333 20 9.3833V7.3833C20 6.8333 19.55 6.3833 19 6.3833H17C16.45 6.3833 16 6.8333 16 7.3833V9.3833C16 9.9333 16.45 10.3833 17 10.3833Z" fill={colorCode} />
    </svg>
  );
}
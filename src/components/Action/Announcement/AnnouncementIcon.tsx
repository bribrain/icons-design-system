import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAnnouncementProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AnnouncementIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAnnouncementProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V20.3833L4 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301ZM10 9.3833C9.45 9.3833 9 8.9333 9 8.3833V4.3833C9 3.8333 9.45 3.3833 10 3.3833C10.55 3.3833 11 3.8333 11 4.3833V8.3833C11 8.9333 10.55 9.3833 10 9.3833ZM11 13.3833H9V11.3833H11V13.3833Z" fill={colorCode} />
    </svg>
  );
}
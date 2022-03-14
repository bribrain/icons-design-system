import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAddToQueueIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddToQueueIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAddToQueueIconProps) {
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
      <path d="M20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.9 16.3833 2 16.3833H7V17.3833C7 17.9333 7.45 18.3833 8 18.3833H14C14.55 18.3833 15 17.9333 15 17.3833V16.3833H20C21.1 16.3833 22 15.4833 22 14.3833V2.3833C22 1.2733 21.1 0.383301 20 0.383301ZM19 14.3833H3C2.45 14.3833 2 13.9333 2 13.3833V3.3833C2 2.8333 2.45 2.3833 3 2.3833H19C19.55 2.3833 20 2.8333 20 3.3833V13.3833C20 13.9333 19.55 14.3833 19 14.3833ZM15 8.3833C15 8.9333 14.55 9.3833 14 9.3833H12V11.3833C12 11.9333 11.55 12.3833 11 12.3833C10.45 12.3833 10 11.9333 10 11.3833V9.3833H8C7.45 9.3833 7 8.9333 7 8.3833C7 7.8333 7.45 7.3833 8 7.3833H10V5.3833C10 4.8333 10.45 4.3833 11 4.3833C11.55 4.3833 12 4.8333 12 5.3833V7.3833H14C14.55 7.3833 15 7.8333 15 8.3833Z" fill={colorCode} />
    </svg>

  );
}
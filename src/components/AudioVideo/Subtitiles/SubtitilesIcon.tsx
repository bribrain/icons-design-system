import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISubtitilesIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SubtitilesIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISubtitilesIconProps) {
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
      <path d="M18 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.9 16.3833 2 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301ZM3 8.3833H5C5.55 8.3833 6 8.8333 6 9.3833C6 9.9333 5.55 10.3833 5 10.3833H3C2.45 10.3833 2 9.9333 2 9.3833C2 8.8333 2.45 8.3833 3 8.3833ZM11 14.3833H3C2.45 14.3833 2 13.9333 2 13.3833C2 12.8333 2.45 12.3833 3 12.3833H11C11.55 12.3833 12 12.8333 12 13.3833C12 13.9333 11.55 14.3833 11 14.3833ZM17 14.3833H15C14.45 14.3833 14 13.9333 14 13.3833C14 12.8333 14.45 12.3833 15 12.3833H17C17.55 12.3833 18 12.8333 18 13.3833C18 13.9333 17.55 14.3833 17 14.3833ZM17 10.3833H9C8.45 10.3833 8 9.9333 8 9.3833C8 8.8333 8.45 8.3833 9 8.3833H17C17.55 8.3833 18 8.8333 18 9.3833C18 9.9333 17.55 10.3833 17 10.3833Z" fill={colorCode} />
    </svg>
  );
}
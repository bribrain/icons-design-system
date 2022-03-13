import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDeleteForeverProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DeleteForeverIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDeleteForeverProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 16.3833C1 17.4833 1.9 18.3833 3 18.3833H11C12.1 18.3833 13 17.4833 13 16.3833V6.3833C13 5.2833 12.1 4.3833 11 4.3833H3C1.9 4.3833 1 5.2833 1 6.3833V16.3833ZM4.17 8.5533C4.56 8.1633 5.19 8.1633 5.58 8.5533L7 9.9733L8.42 8.5533C8.81 8.1633 9.44 8.1633 9.83 8.5533C10.22 8.9433 10.22 9.5733 9.83 9.9633L8.41 11.3833L9.83 12.8033C10.22 13.1933 10.22 13.8233 9.83 14.2133C9.44 14.6033 8.81 14.6033 8.42 14.2133L7 12.7933L5.58 14.2133C5.19 14.6033 4.56 14.6033 4.17 14.2133C3.78 13.8233 3.78 13.1933 4.17 12.8033L5.59 11.3833L4.17 9.9633C3.78 9.5833 3.78 8.9433 4.17 8.5533ZM10.5 1.3833L9.79 0.673301C9.61 0.493301 9.35 0.383301 9.09 0.383301H4.91C4.65 0.383301 4.39 0.493301 4.21 0.673301L3.5 1.3833H1C0.45 1.3833 0 1.8333 0 2.3833C0 2.9333 0.45 3.3833 1 3.3833H13C13.55 3.3833 14 2.9333 14 2.3833C14 1.8333 13.55 1.3833 13 1.3833H10.5Z" fill={colorCode} />
    </svg>
  );
}
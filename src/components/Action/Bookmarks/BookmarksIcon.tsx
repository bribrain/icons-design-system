import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IBookmarksProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BookmarksIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IBookmarksProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 18.3833L21 19.3833V3.3833C21 2.2833 20.1 1.3833 19 1.3833H8.99C7.89 1.3833 7 2.2833 7 3.3833H17C18.1 3.3833 19 4.2833 19 5.3833V18.3833ZM15 5.3833H5C3.9 5.3833 3 6.2833 3 7.3833V23.3833L10 20.3833L17 23.3833V7.3833C17 6.2833 16.1 5.3833 15 5.3833Z" fill={colorCode} />
    </svg>
  );
}
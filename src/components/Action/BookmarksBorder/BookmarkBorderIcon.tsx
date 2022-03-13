import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IBookmarkBorderProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BookmarkBorderIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IBookmarkBorderProps) {
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
      <path d="M12 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V18.3833L7 15.3833L14 18.3833V2.3833C14 1.2833 13.1 0.383301 12 0.383301ZM12 15.3833L7 13.2033L2 15.3833V3.3833C2 2.8333 2.45 2.3833 3 2.3833H11C11.55 2.3833 12 2.8333 12 3.3833V15.3833Z" fill={colorCode} />
    </svg>
  );
}
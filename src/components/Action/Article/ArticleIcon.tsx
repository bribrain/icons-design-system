import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IArticleProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ArticleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IArticleProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM10 14.3833H5C4.45 14.3833 4 13.9333 4 13.3833C4 12.8333 4.45 12.3833 5 12.3833H10C10.55 12.3833 11 12.8333 11 13.3833C11 13.9333 10.55 14.3833 10 14.3833ZM13 10.3833H5C4.45 10.3833 4 9.9333 4 9.3833C4 8.8333 4.45 8.3833 5 8.3833H13C13.55 8.3833 14 8.8333 14 9.3833C14 9.9333 13.55 10.3833 13 10.3833ZM13 6.3833H5C4.45 6.3833 4 5.9333 4 5.3833C4 4.8333 4.45 4.3833 5 4.3833H13C13.55 4.3833 14 4.8333 14 5.3833C14 5.9333 13.55 6.3833 13 6.3833Z" fill={colorCode} />
    </svg>
  );
}
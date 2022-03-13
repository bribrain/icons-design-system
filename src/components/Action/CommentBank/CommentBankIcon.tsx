import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICommentBankProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CommentBankIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICommentBankProps) {
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
      <path d="M18 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V20.3833L4 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301ZM17 11.3833L14.5 9.8833L12 11.3833V3.3833H17V11.3833Z" fill={colorCode} />
    </svg>
  );
}
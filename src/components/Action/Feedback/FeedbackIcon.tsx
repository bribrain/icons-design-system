import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFeedbackProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FeedbackIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFeedbackProps) {
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
      <path d="M18 0.383301H2.01001C0.91001 0.383301 0.0100098 1.2833 0.0100098 2.3833V20.3833L4.00001 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301ZM11 12.3833H9.00001V10.3833H11V12.3833ZM11 7.3833C11 7.9333 10.55 8.3833 10 8.3833C9.45001 8.3833 9.00001 7.9333 9.00001 7.3833V5.3833C9.00001 4.8333 9.45001 4.3833 10 4.3833C10.55 4.3833 11 4.8333 11 5.3833V7.3833Z" fill={colorCode} />
    </svg>
  );
}
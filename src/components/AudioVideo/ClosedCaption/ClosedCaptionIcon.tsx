import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IClosedCaptionIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ClosedCaptionIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IClosedCaptionIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.89 16.3833 2 16.3833H16C17.1 16.3833 18 15.4833 18 14.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM8 6.8833C8 7.1633 7.78 7.3833 7.5 7.3833H7C6.72 7.3833 6.5 7.1633 6.5 6.8833H4.5V9.8833H6.5C6.5 9.6033 6.72 9.3833 7 9.3833H7.5C7.78 9.3833 8 9.6033 8 9.8833V10.3833C8 10.9333 7.55 11.3833 7 11.3833H4C3.45 11.3833 3 10.9333 3 10.3833V6.3833C3 5.8333 3.45 5.3833 4 5.3833H7C7.55 5.3833 8 5.8333 8 6.3833V6.8833ZM15 6.8833C15 7.1633 14.78 7.3833 14.5 7.3833H14C13.72 7.3833 13.5 7.1633 13.5 6.8833H11.5V9.8833H13.5C13.5 9.6033 13.72 9.3833 14 9.3833H14.5C14.78 9.3833 15 9.6033 15 9.8833V10.3833C15 10.9333 14.55 11.3833 14 11.3833H11C10.45 11.3833 10 10.9333 10 10.3833V6.3833C10 5.8333 10.45 5.3833 11 5.3833H14C14.55 5.3833 15 5.8333 15 6.3833V6.8833Z" fill={colorCode} />
    </svg>
  );
}
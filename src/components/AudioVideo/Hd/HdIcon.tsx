import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHdIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HdIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHdIconProps) {
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
      <path d="M16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.89 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM7.25 12.3833C6.84 12.3833 6.5 12.0433 6.5 11.6333V10.3833H4.5V11.6333C4.5 12.0433 4.16 12.3833 3.75 12.3833C3.34 12.3833 3 12.0433 3 11.6333V7.1333C3 6.7233 3.34 6.3833 3.75 6.3833C4.16 6.3833 4.5 6.7233 4.5 7.1333V8.8833H6.5V7.1333C6.5 6.7233 6.84 6.3833 7.25 6.3833C7.66 6.3833 8 6.7233 8 7.1333V11.6333C8 12.0433 7.66 12.3833 7.25 12.3833ZM10.5 6.3833H14C14.55 6.3833 15 6.8333 15 7.3833V11.3833C15 11.9333 14.55 12.3833 14 12.3833H10.5C10.22 12.3833 10 12.1633 10 11.8833V6.8833C10 6.6033 10.22 6.3833 10.5 6.3833ZM11.5 10.8833H13.5V7.8833H11.5V10.8833Z" fill={colorCode} />
    </svg>
  );
}
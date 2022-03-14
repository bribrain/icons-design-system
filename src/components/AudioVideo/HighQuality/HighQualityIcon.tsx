import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHighQualityIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HighQualityIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHighQualityIconProps) {
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
      <path d="M16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.89 16.3833 2 16.3833H16C17.1 16.3833 18 15.4833 18 14.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM7.25 11.3833C6.84 11.3833 6.5 11.0433 6.5 10.6333V9.3833H4.5V10.6333C4.5 11.0433 4.16 11.3833 3.75 11.3833C3.34 11.3833 3 11.0433 3 10.6333V6.1333C3 5.7233 3.34 5.3833 3.75 5.3833C4.16 5.3833 4.5 5.7233 4.5 6.1333V7.8833H6.5V6.1333C6.5 5.7233 6.84 5.3833 7.25 5.3833C7.66 5.3833 8 5.7233 8 6.1333V10.6333C8 11.0433 7.66 11.3833 7.25 11.3833ZM15 10.3833C15 10.9333 14.55 11.3833 14 11.3833H13.25V12.1333C13.25 12.5433 12.91 12.8833 12.5 12.8833C12.09 12.8833 11.75 12.5433 11.75 12.1333V11.3833H11C10.45 11.3833 10 10.9333 10 10.3833V6.3833C10 5.8333 10.45 5.3833 11 5.3833H14C14.55 5.3833 15 5.8333 15 6.3833V10.3833ZM11.5 9.8833H13.5V6.8833H11.5V9.8833Z" fill={colorCode} />
    </svg>
  );
}
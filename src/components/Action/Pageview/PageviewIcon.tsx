import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPageviewProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PageviewIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPageviewProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M9.5 5.3833C8.12 5.3833 7 6.5033 7 7.8833C7 9.2633 8.12 10.3833 9.5 10.3833C10.88 10.3833 12 9.2633 12 7.8833C12 6.5033 10.88 5.3833 9.5 5.3833ZM18 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.9 16.3833 2 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301ZM14.08 13.8833L11.88 11.6833C10.98 12.2633 9.85 12.5233 8.66 12.3033C6.78 11.9533 5.28 10.3733 5.04 8.4733C4.66 5.4633 7.22 2.9533 10.25 3.4333C12.13 3.7333 13.64 5.2733 13.95 7.1433C14.14 8.3033 13.87 9.3733 13.31 10.2633L15.51 12.4533C15.9 12.8433 15.9 13.4833 15.51 13.8733C15.11 14.2733 14.47 14.2733 14.08 13.8833Z" fill={colorCode} />
    </svg>
  );
}
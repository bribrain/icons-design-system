import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITableViewProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TableViewIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITableViewProps) {
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
      <path d="M16 4.3833H6C4.9 4.3833 4 5.2833 4 6.3833V16.3833C4 17.4833 4.9 18.3833 6 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V6.3833C18 5.2833 17.1 4.3833 16 4.3833ZM16 7.3833C16 7.9333 15.55 8.3833 15 8.3833H7C6.45 8.3833 6 7.9333 6 7.3833C6 6.8333 6.45 6.3833 7 6.3833H15C15.55 6.3833 16 6.8333 16 7.3833ZM10 12.3833V10.3833H12V12.3833H10ZM12 14.3833V16.3833H10V14.3833H12ZM8 12.3833H6V10.3833H8V12.3833ZM14 10.3833H16V12.3833H14V10.3833ZM6 14.3833H8V16.3833H6V14.3833ZM14 16.3833V14.3833H16V16.3833H14ZM3 14.3833H2C0.9 14.3833 0 13.4833 0 12.3833V2.3833C0 1.2833 0.9 0.383301 2 0.383301H12C13.1 0.383301 14 1.2833 14 2.3833V3.3833H12V2.3833H2V12.3833H3V14.3833Z" fill={colorCode} />
    </svg>
  );
}
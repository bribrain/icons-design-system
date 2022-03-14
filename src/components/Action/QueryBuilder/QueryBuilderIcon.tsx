import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IQueryBuilderProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function QueryBuilderIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IQueryBuilderProps) {
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
      <path d="M9.99 0.383301C4.47 0.383301 0 4.8633 0 10.3833C0 15.9033 4.47 20.3833 9.99 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 9.99 0.383301ZM10 18.3833C5.58 18.3833 2 14.8033 2 10.3833C2 5.9633 5.58 2.3833 10 2.3833C14.42 2.3833 18 5.9633 18 10.3833C18 14.8033 14.42 18.3833 10 18.3833ZM9.78 5.3833H9.72C9.32 5.3833 9 5.7033 9 6.1033V10.8233C9 11.1733 9.18 11.5033 9.49 11.6833L13.64 14.1733C13.98 14.3733 14.42 14.2733 14.62 13.9333C14.83 13.5933 14.72 13.1433 14.37 12.9433L10.5 10.6433V6.1033C10.5 5.7033 10.18 5.3833 9.78 5.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFlakyProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlakyIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFlakyProps) {
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.16 14.1033C9.87 13.8133 9.87 13.3333 10.16 13.0433C10.45 12.7533 10.93 12.7533 11.22 13.0433L12.04 13.8633L14 11.9033C14.29 11.6133 14.77 11.6133 15.06 11.9033C15.35 12.1933 15.35 12.6733 15.06 12.9633L12.41 15.6133C12.22 15.8033 11.9 15.8133 11.71 15.6133L10.16 14.1033ZM10 0.383301C4.5 0.383301 0 4.8833 0 10.3833C0 15.8833 4.5 20.3833 10 20.3833C15.5 20.3833 20 15.8833 20 10.3833C20 4.8833 15.5 0.383301 10 0.383301ZM5.87 5.1933L6.75 6.0733L7.63 5.1933C7.92 4.9033 8.4 4.9033 8.69 5.1933C8.98 5.4833 8.98 5.9633 8.69 6.2533L7.81 7.1333L8.69 8.0133C8.98 8.3033 8.98 8.7833 8.69 9.0733C8.4 9.3633 7.92 9.3633 7.63 9.0733L6.75 8.1933L5.87 9.0733C5.58 9.3633 5.1 9.3633 4.81 9.0733C4.52 8.7833 4.52 8.3033 4.81 8.0133L5.69 7.1333L4.81 6.2533C4.52 5.9633 4.52 5.4833 4.81 5.1933C5.1 4.8933 5.57 4.8933 5.87 5.1933ZM10 18.3833C7.8 18.3833 5.8 17.4833 4.3 16.0833L15.7 4.6833C17.1 6.1833 18 8.1833 18 10.3833C18 14.7833 14.4 18.3833 10 18.3833Z" fill={colorCode} />
    </svg>
  );
}
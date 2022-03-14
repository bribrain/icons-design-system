import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IGroupWorkProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function GroupWorkIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IGroupWorkProps) {
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
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM6 15.8833C4.62 15.8833 3.5 14.7633 3.5 13.3833C3.5 12.0033 4.62 10.8833 6 10.8833C7.38 10.8833 8.5 12.0033 8.5 13.3833C8.5 14.7633 7.38 15.8833 6 15.8833ZM7.5 6.3833C7.5 5.0033 8.62 3.8833 10 3.8833C11.38 3.8833 12.5 5.0033 12.5 6.3833C12.5 7.7633 11.38 8.8833 10 8.8833C8.62 8.8833 7.5 7.7633 7.5 6.3833ZM14 15.8833C12.62 15.8833 11.5 14.7633 11.5 13.3833C11.5 12.0033 12.62 10.8833 14 10.8833C15.38 10.8833 16.5 12.0033 16.5 13.3833C16.5 14.7633 15.38 15.8833 14 15.8833Z" fill={colorCode} />
    </svg>
  );
}
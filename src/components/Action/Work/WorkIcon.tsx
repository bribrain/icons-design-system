import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IWorkProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WorkIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IWorkProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 4.3833H14V2.3833C14 1.2733 13.11 0.383301 12 0.383301H8C6.89 0.383301 6 1.2733 6 2.3833V4.3833H2C0.89 4.3833 0.00999999 5.2733 0.00999999 6.3833L0 17.3833C0 18.4933 0.89 19.3833 2 19.3833H18C19.11 19.3833 20 18.4933 20 17.3833V6.3833C20 5.2733 19.11 4.3833 18 4.3833ZM12 4.3833H8V2.3833H12V4.3833Z" fill={colorCode} />
    </svg>
  );
}
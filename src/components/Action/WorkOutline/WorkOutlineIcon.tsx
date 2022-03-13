import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IWorkOutlineProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WorkOutlineIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IWorkOutlineProps) {
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
      <path d="M12 4.3833V2.3833H8V4.3833H12ZM2 7.3833V16.3833C2 16.9333 2.45 17.3833 3 17.3833H17C17.55 17.3833 18 16.9333 18 16.3833V7.3833C18 6.8333 17.55 6.3833 17 6.3833H3C2.45 6.3833 2 6.8333 2 7.3833ZM18 4.3833C19.11 4.3833 20 5.2733 20 6.3833V17.3833C20 18.4933 19.11 19.3833 18 19.3833H2C0.89 19.3833 0 18.4933 0 17.3833L0.00999999 6.3833C0.00999999 5.2733 0.89 4.3833 2 4.3833H6V2.3833C6 1.2733 6.89 0.383301 8 0.383301H12C13.11 0.383301 14 1.2733 14 2.3833V4.3833H18Z" fill={colorCode} />
    </svg>
  );
}
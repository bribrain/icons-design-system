import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFilterAltProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FilterAltIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFilterAltProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.249995 1.9933C2.56999 4.9733 5.99999 9.3833 5.99999 9.3833V14.3833C5.99999 15.4833 6.89999 16.3833 7.99999 16.3833C9.09999 16.3833 10 15.4833 10 14.3833V9.3833C10 9.3833 13.43 4.9733 15.75 1.9933C16.26 1.3333 15.79 0.383301 14.95 0.383301H1.03999C0.209995 0.383301 -0.260005 1.3333 0.249995 1.9933Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IWorkOffProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WorkOffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IWorkOffProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.11 0.923301C1.72 0.533301 1.09 0.533301 0.7 0.923301C0.31 1.3133 0.31 1.9433 0.7 2.3333L2.74 4.3833H2C0.89 4.3833 0.00999999 5.2733 0.00999999 6.3833L0 17.3833C0 18.4933 0.89 19.3833 2 19.3833H17.74L19.03 20.6733C19.42 21.0633 20.05 21.0633 20.44 20.6733C20.83 20.2833 20.83 19.6533 20.44 19.2633L2.11 0.923301ZM8 2.3833H12V4.3833H8.4L20 15.9833V6.3833C20 5.2733 19.11 4.3833 18 4.3833H14V2.3833C14 1.2733 13.11 0.383301 12 0.383301H8C7.01 0.383301 6.2 1.0833 6.04 2.0233L8 3.9833V2.3833Z" fill={colorCode} />
    </svg>
  );
}
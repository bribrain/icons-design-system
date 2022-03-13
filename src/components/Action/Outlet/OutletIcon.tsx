import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IOutletProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function OutletIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IOutletProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM7 10.3833C6.45 10.3833 6 9.9333 6 9.3833V6.3833C6 5.8333 6.45 5.3833 7 5.3833C7.55 5.3833 8 5.8333 8 6.3833V9.3833C8 9.9333 7.55 10.3833 7 10.3833ZM11 16.3833H9C8.45 16.3833 8 15.9333 8 15.3833V14.4933C8 13.4933 8.68 12.5733 9.66 12.4133C10.92 12.2033 12 13.1733 12 14.3833V15.3833C12 15.9333 11.55 16.3833 11 16.3833ZM14 9.3833C14 9.9333 13.55 10.3833 13 10.3833C12.45 10.3833 12 9.9333 12 9.3833V6.3833C12 5.8333 12.45 5.3833 13 5.3833C13.55 5.3833 14 5.8333 14 6.3833V9.3833Z" fill={colorCode} />
    </svg>
  );
}
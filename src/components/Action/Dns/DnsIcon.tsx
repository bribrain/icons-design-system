import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDnsProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DnsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDnsProps) {
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
      <path d="M16 10.3833H2C0.9 10.3833 0 11.2833 0 12.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V12.3833C18 11.2833 17.1 10.3833 16 10.3833ZM4 16.3833C2.9 16.3833 2 15.4833 2 14.3833C2 13.2833 2.9 12.3833 4 12.3833C5.1 12.3833 6 13.2833 6 14.3833C6 15.4833 5.1 16.3833 4 16.3833ZM16 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V6.3833C0 7.4833 0.9 8.3833 2 8.3833H16C17.1 8.3833 18 7.4833 18 6.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM4 6.3833C2.9 6.3833 2 5.4833 2 4.3833C2 3.2833 2.9 2.3833 4 2.3833C5.1 2.3833 6 3.2833 6 4.3833C6 5.4833 5.1 6.3833 4 6.3833Z" fill={colorCode} />
    </svg>
  );
}
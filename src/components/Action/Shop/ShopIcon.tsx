import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IShopProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ShopIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IShopProps) {
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
      <path d="M14 4.3833V2.3833C14 1.2833 13.1 0.383301 12 0.383301H8C6.9 0.383301 6 1.2833 6 2.3833V4.3833H2C0.9 4.3833 0 5.2833 0 6.3833V17.3833C0 18.4833 0.9 19.3833 2 19.3833H18C19.1 19.3833 20 18.4833 20 17.3833V6.3833C20 5.2833 19.1 4.3833 18 4.3833H14ZM8 2.3833H12V4.3833H8V2.3833ZM7 15.4533V8.2133C7 7.8333 7.4 7.5933 7.74 7.7733L13.77 10.9833C14.1 11.1633 14.13 11.6333 13.81 11.8433L7.78 15.8633C7.45 16.0833 7 15.8533 7 15.4533V15.4533Z" fill={colorCode} />
    </svg>
  );
}
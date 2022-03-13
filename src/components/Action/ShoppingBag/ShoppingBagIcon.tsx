import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IShoppingBagProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ShoppingBagIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IShoppingBagProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 4.3833H12C12 2.1733 10.21 0.383301 8 0.383301C5.79 0.383301 4 2.1733 4 4.3833H2C0.9 4.3833 0 5.2833 0 6.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H14C15.1 20.3833 16 19.4833 16 18.3833V6.3833C16 5.2833 15.1 4.3833 14 4.3833ZM6 8.3833C6 8.9333 5.55 9.3833 5 9.3833C4.45 9.3833 4 8.9333 4 8.3833V6.3833H6V8.3833ZM8 2.3833C9.1 2.3833 10 3.2833 10 4.3833H6C6 3.2833 6.9 2.3833 8 2.3833ZM12 8.3833C12 8.9333 11.55 9.3833 11 9.3833C10.45 9.3833 10 8.9333 10 8.3833V6.3833H12V8.3833Z" fill={colorCode} />
    </svg>
  );
}
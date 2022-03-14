import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IShoppingCartProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ShoppingCartIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IShoppingCartProps) {
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
      <path d="M6 16.3833C4.9 16.3833 4.01 17.2833 4.01 18.3833C4.01 19.4833 4.9 20.3833 6 20.3833C7.1 20.3833 8 19.4833 8 18.3833C8 17.2833 7.1 16.3833 6 16.3833ZM0 1.3833C0 1.9333 0.45 2.3833 1 2.3833H2L5.6 9.9733L4.25 12.4133C3.52 13.7533 4.48 15.3833 6 15.3833H17C17.55 15.3833 18 14.9333 18 14.3833C18 13.8333 17.55 13.3833 17 13.3833H6L7.1 11.3833H14.55C15.3 11.3833 15.96 10.9733 16.3 10.3533L19.88 3.8633C20.25 3.2033 19.77 2.3833 19.01 2.3833H4.21L3.54 0.953301C3.38 0.603301 3.02 0.383301 2.64 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833ZM16 16.3833C14.9 16.3833 14.01 17.2833 14.01 18.3833C14.01 19.4833 14.9 20.3833 16 20.3833C17.1 20.3833 18 19.4833 18 18.3833C18 17.2833 17.1 16.3833 16 16.3833Z" fill={colorCode} />
    </svg>
  );
}
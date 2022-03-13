import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IShoppingBasketProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ShoppingBasketIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IShoppingBasketProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 7.38329H16.21L11.82 0.813289C11.42 0.223289 10.55 0.223289 10.16 0.813289L5.77 7.38329H1C0.45 7.38329 0 7.83329 0 8.38329C0 8.47329 0.00999996 8.56329 0.04 8.65329L2.58 17.9233C2.81 18.7633 3.58 19.3833 4.5 19.3833H17.5C18.42 19.3833 19.19 18.7633 19.43 17.9233L21.97 8.65329L22 8.38329C22 7.83329 21.55 7.38329 21 7.38329ZM10.99 3.17329L13.8 7.38329H8.18L10.99 3.17329ZM11 15.3833C9.9 15.3833 9 14.4833 9 13.3833C9 12.2833 9.9 11.3833 11 11.3833C12.1 11.3833 13 12.2833 13 13.3833C13 14.4833 12.1 15.3833 11 15.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRemoveShoppingCartProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RemoveShoppingCartIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRemoveShoppingCartProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.709996 1.21328C0.319996 1.60328 0.319996 2.23328 0.709996 2.62328L4.39 6.30328L6.6 10.9633L5.25 13.4133C5.06 13.7433 4.97 14.1433 5.01 14.5633C5.11 15.6233 6.07 16.3833 7.13 16.3833H14.46L15.84 17.7633C15.34 18.1233 15.01 18.7133 15.01 19.3833C15.01 20.4833 15.9 21.3833 17 21.3833C17.67 21.3833 18.26 21.0533 18.62 20.5433L20.75 22.6733C21.14 23.0633 21.77 23.0633 22.16 22.6733C22.55 22.2833 22.55 21.6533 22.16 21.2633L2.12 1.21328C1.73 0.823276 1.1 0.823276 0.709996 1.21328ZM7 14.3833L8.1 12.3833H10.46L12.46 14.3833H7ZM16.05 12.3233C16.59 12.1833 17.04 11.8333 17.3 11.3533L20.88 4.86328C21.25 4.20328 20.76 3.38328 20 3.38328H7.12L16.05 12.3233ZM7 17.3833C5.9 17.3833 5.01 18.2833 5.01 19.3833C5.01 20.4833 5.9 21.3833 7 21.3833C8.1 21.3833 9 20.4833 9 19.3833C9 18.2833 8.1 17.3833 7 17.3833Z" fill={colorCode} />
    </svg>
  );
}
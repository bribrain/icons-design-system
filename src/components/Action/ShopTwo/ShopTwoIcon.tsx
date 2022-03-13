import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IShopTwoProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ShopTwoIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IShopTwoProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 8.3833C0.45 8.3833 0 8.8333 0 9.3833V19.3833C0 20.4833 0.9 21.3833 2 21.3833H16C17.11 21.3833 18 20.4933 18 19.3833H3C2.45 19.3833 2 18.9333 2 18.3833V9.3833C2 8.8333 1.55 8.3833 1 8.3833ZM17 4.3833V2.3833C17 1.2833 16.1 0.383301 15 0.383301H11C9.9 0.383301 9 1.2833 9 2.3833V4.3833H6C4.9 4.3833 4 5.2833 4 6.3833V15.3833C4 16.4833 4.9 17.3833 6 17.3833H20C21.1 17.3833 22 16.4833 22 15.3833V6.3833C22 5.2833 21.1 4.3833 20 4.3833H17ZM11 2.3833H15V4.3833H11V2.3833ZM11 13.4033V8.2233C11 7.8433 11.41 7.6033 11.74 7.7833L15.81 10.0033C16.13 10.1833 16.16 10.6333 15.86 10.8433L11.79 13.8033C11.46 14.0433 11 13.8133 11 13.4033Z" fill={colorCode} />
    </svg>
  );
}
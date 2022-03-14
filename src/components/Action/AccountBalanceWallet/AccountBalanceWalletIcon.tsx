import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAccountBalanceWalletIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AccountBalanceWalletIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAccountBalanceWalletIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 13.3833V5.3833C7 4.2833 7.89 3.3833 9 3.3833H18V2.3833C18 1.2833 17.1 0.383301 16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.89 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V15.3833H9C7.89 15.3833 7 14.4833 7 13.3833ZM10 5.3833C9.45 5.3833 9 5.8333 9 6.3833V12.3833C9 12.9333 9.45 13.3833 10 13.3833H19V5.3833H10ZM13 10.8833C12.17 10.8833 11.5 10.2133 11.5 9.3833C11.5 8.5533 12.17 7.8833 13 7.8833C13.83 7.8833 14.5 8.5533 14.5 9.3833C14.5 10.2133 13.83 10.8833 13 10.8833Z" fill={colorCode} />
    </svg>
  );
}
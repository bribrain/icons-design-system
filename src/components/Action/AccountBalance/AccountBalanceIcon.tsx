import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAccountBalanceIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AccountBalanceIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAccountBalanceIconProps) {
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
      <path d="M2 10.8832V14.8832C2 15.7132 2.67 16.3832 3.5 16.3832C4.33 16.3832 5 15.7132 5 14.8832V10.8832C5 10.0532 4.33 9.38325 3.5 9.38325C2.67 9.38325 2 10.0532 2 10.8832ZM8 10.8832V14.8832C8 15.7132 8.67 16.3832 9.5 16.3832C10.33 16.3832 11 15.7132 11 14.8832V10.8832C11 10.0532 10.33 9.38325 9.5 9.38325C8.67 9.38325 8 10.0532 8 10.8832ZM1.5 21.3832H17.5C18.33 21.3832 19 20.7132 19 19.8832C19 19.0532 18.33 18.3832 17.5 18.3832H1.5C0.67 18.3832 0 19.0532 0 19.8832C0 20.7132 0.67 21.3832 1.5 21.3832ZM14 10.8832V14.8832C14 15.7132 14.67 16.3832 15.5 16.3832C16.33 16.3832 17 15.7132 17 14.8832V10.8832C17 10.0532 16.33 9.38325 15.5 9.38325C14.67 9.38325 14 10.0532 14 10.8832ZM8.57 0.873247L0.67 5.03325C0.26 5.24325 0 5.67325 0 6.13325C0 6.82325 0.56 7.38325 1.25 7.38325H17.76C18.44 7.38325 19 6.82325 19 6.13325C19 5.67325 18.74 5.24325 18.33 5.03325L10.43 0.873247C9.85 0.563247 9.15 0.563247 8.57 0.873247Z" fill={colorCode} />
    </svg>
  );
}
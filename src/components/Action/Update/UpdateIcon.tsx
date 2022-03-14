import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IUpdateProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function UpdateIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IUpdateProps) {
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
      <path d="M8 6.1333V9.8133C8 10.1633 8.19 10.4933 8.49 10.6733L11.61 12.5233C11.97 12.7333 12.43 12.6133 12.64 12.2633C12.85 11.9033 12.74 11.4433 12.38 11.2333L9.51 9.5233V6.1233C9.5 5.7233 9.16 5.3833 8.75 5.3833C8.34 5.3833 8 5.7233 8 6.1333ZM18 6.8833V1.5933C18 1.1433 17.46 0.923299 17.15 1.2433L15.37 3.0233C13.56 1.2133 10.98 0.173299 8.16 0.423299C3.97 0.803299 0.52 4.1733 0.06 8.3633C-0.54 13.7833 3.69 18.3833 9 18.3833C13.59 18.3833 17.38 14.9433 17.93 10.5033C18 9.9033 17.53 9.3833 16.93 9.3833C16.43 9.3833 16.01 9.7533 15.95 10.2433C15.52 13.7333 12.51 16.4333 8.9 16.3833C5.19 16.3333 2.06 13.2033 2 9.4833C1.94 5.5833 5.11 2.3833 9 2.3833C10.93 2.3833 12.68 3.1733 13.95 4.4333L11.86 6.5233C11.54 6.8433 11.76 7.3833 12.21 7.3833H17.5C17.78 7.3833 18 7.1633 18 6.8833Z" fill={colorCode} />
    </svg>
  );
}
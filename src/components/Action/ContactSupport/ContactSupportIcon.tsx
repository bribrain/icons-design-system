import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IContactSupportProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ContactSupportIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IContactSupportProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.5 0.383301C3.81 0.383301 0 4.1933 0 8.8833C0 13.5733 3.81 17.3833 8.5 17.3833H9V20.3833C13.86 18.0433 17 13.3833 17 8.8833C17 4.1933 13.19 0.383301 8.5 0.383301ZM9.5 14.8833H7.5V12.8833H9.5V14.8833ZM9.9 10.1033C9.89 10.1133 9.88 10.1333 9.87 10.1533C9.82 10.2333 9.77 10.3133 9.73 10.3933C9.71 10.4233 9.7 10.4633 9.69 10.5033C9.66 10.5733 9.63 10.6433 9.61 10.7133C9.54 10.9233 9.51 11.1433 9.51 11.3933H7.5C7.5 10.8833 7.58 10.4533 7.7 10.0933C7.7 10.0833 7.7 10.0733 7.71 10.0633C7.72 10.0233 7.75 10.0033 7.76 9.9633C7.82 9.8033 7.89 9.6633 7.98 9.5233C8.01 9.4733 8.05 9.4233 8.08 9.3733C8.11 9.3333 8.13 9.2833 8.16 9.2533L8.17 9.2633C9.01 8.1633 10.38 7.8233 10.49 6.5833C10.58 5.6033 9.88 4.6533 8.92 4.4533C7.88 4.2333 6.94 4.8433 6.62 5.7333C6.48 6.0933 6.15 6.3833 5.74 6.3833H5.54C4.94 6.3833 4.5 5.7933 4.67 5.2133C5.22 3.3933 7.04 2.1233 9.1 2.4233C10.79 2.6733 12.14 4.0633 12.43 5.7533C12.87 8.1933 10.8 8.7833 9.9 10.1033Z" fill={colorCode} />
    </svg>
  );
}
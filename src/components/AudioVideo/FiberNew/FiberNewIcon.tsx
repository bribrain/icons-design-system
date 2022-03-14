import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFiberNewIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FiberNewIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFiberNewIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 0.383301H2C0.89 0.383301 0.00999999 1.2733 0.00999999 2.3833L0 14.3833C0 15.4933 0.89 16.3833 2 16.3833H18C19.11 16.3833 20 15.4933 20 14.3833V2.3833C20 1.2733 19.11 0.383301 18 0.383301ZM6.5 10.5933C6.5 11.0233 6.14 11.3833 5.71 11.3833C5.46 11.3833 5.22 11.2633 5.07 11.0533L2.75 7.8833V10.7633C2.75 11.1133 2.47 11.3833 2.13 11.3833C1.79 11.3833 1.5 11.1033 1.5 10.7633V6.1733C1.5 5.7433 1.86 5.3833 2.29 5.3833H2.34C2.6 5.3833 2.84 5.5033 2.99 5.7133L5.25 8.8833V6.0033C5.25 5.6633 5.53 5.3833 5.88 5.3833C6.23 5.3833 6.5 5.6633 6.5 6.0033V10.5933ZM11.5 6.0233C11.5 6.3733 11.22 6.6433 10.88 6.6433H9V7.7633H10.88C11.23 7.7633 11.5 8.0433 11.5 8.3833V8.3933C11.5 8.7433 11.22 9.0133 10.88 9.0133H9V10.1233H10.88C11.23 10.1233 11.5 10.4033 11.5 10.7433C11.5 11.0933 11.22 11.3633 10.88 11.3633H8.35C7.88 11.3633 7.5 10.9833 7.5 10.5133V6.2133C7.5 5.7633 7.88 5.3833 8.35 5.3833H10.88C11.23 5.3833 11.5 5.6633 11.5 6.0033V6.0233ZM18.5 10.3833C18.5 10.9333 18.05 11.3833 17.5 11.3833H13.5C12.95 11.3833 12.5 10.9333 12.5 10.3833V6.0033C12.5 5.6633 12.78 5.3833 13.12 5.3833C13.46 5.3833 13.74 5.6633 13.74 6.0033V9.8933H14.87V6.9933C14.87 6.6433 15.15 6.3733 15.49 6.3733C15.83 6.3733 16.11 6.6533 16.11 6.9933V9.8833H17.23V6.0033C17.23 5.6533 17.51 5.3833 17.85 5.3833C18.19 5.3833 18.47 5.6633 18.47 6.0033V10.3833H18.5Z" fill={colorCode} />
    </svg>
  );
}
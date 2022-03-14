import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsApplicationsProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsApplicationsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsApplicationsProps) {
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
      <path d="M9 7.3833C7.9 7.3833 7 8.2833 7 9.3833C7 10.4833 7.9 11.3833 9 11.3833C10.1 11.3833 11 10.4833 11 9.3833C11 8.2833 10.1 7.3833 9 7.3833ZM16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.89 18.3833 2 18.3833H16C17.11 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.11 0.383301 16 0.383301ZM14.25 9.3833C14.25 9.6133 14.23 9.8433 14.2 10.0633L15.68 11.2233C15.81 11.3333 15.85 11.5233 15.76 11.6733L14.36 14.0933C14.27 14.2433 14.09 14.3033 13.93 14.2433L12.19 13.5433C11.83 13.8233 11.43 14.0533 11.01 14.2333L10.75 16.0833C10.72 16.2533 10.57 16.3833 10.4 16.3833H7.6C7.43 16.3833 7.28 16.2533 7.25 16.0933L6.99 14.2433C6.56 14.0633 6.17 13.8333 5.81 13.5533L4.07 14.2533C3.91 14.3133 3.73 14.2533 3.64 14.1033L2.24 11.6833C2.15 11.5333 2.19 11.3433 2.32 11.2333L3.8 10.0733C3.77 9.8433 3.75 9.6133 3.75 9.3833C3.75 9.1533 3.77 8.9233 3.8 8.7033L2.32 7.5433C2.19 7.4333 2.15 7.2433 2.24 7.0933L3.64 4.6733C3.73 4.5233 3.91 4.4633 4.07 4.5233L5.81 5.2233C6.17 4.9433 6.57 4.7133 6.99 4.5333L7.25 2.6833C7.28 2.5133 7.43 2.3833 7.6 2.3833H10.4C10.57 2.3833 10.72 2.5133 10.75 2.6733L11.01 4.5233C11.44 4.7033 11.83 4.9333 12.19 5.2133L13.93 4.5133C14.09 4.4533 14.27 4.5133 14.36 4.6633L15.76 7.0833C15.85 7.2333 15.81 7.4233 15.68 7.5333L14.2 8.6933C14.23 8.9233 14.25 9.1533 14.25 9.3833Z" fill={colorCode} />
    </svg>
  );
}
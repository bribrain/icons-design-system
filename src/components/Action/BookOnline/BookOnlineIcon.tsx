import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IBookOnlineProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BookOnlineIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IBookOnlineProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V20.3833C0 21.4833 0.9 22.3833 2 22.3833H12C13.1 22.3833 14 21.4833 14 20.3833V2.3833C14 1.2833 13.1 0.383301 12 0.383301ZM2 5.3833H12V17.3833H2V5.3833ZM11 10.3833V8.5233C11 7.8933 10.55 7.3833 10 7.3833H4C3.45 7.3833 3 7.8933 3 8.5233V10.4833C3.55 10.4833 4 10.9333 4 11.4833C4 12.0333 3.55 12.4833 3 12.4833V14.2433C3 14.8733 3.45 15.3833 4 15.3833H10C10.55 15.3833 11 14.8733 11 14.2433V12.3833C10.45 12.3833 10 11.9333 10 11.3833C10 10.8333 10.45 10.3833 11 10.3833ZM7 13.8833C6.72 13.8833 6.5 13.6633 6.5 13.3833C6.5 13.1033 6.72 12.8833 7 12.8833C7.28 12.8833 7.5 13.1033 7.5 13.3833C7.5 13.6633 7.28 13.8833 7 13.8833ZM7 11.8833C6.72 11.8833 6.5 11.6633 6.5 11.3833C6.5 11.1033 6.72 10.8833 7 10.8833C7.28 10.8833 7.5 11.1033 7.5 11.3833C7.5 11.6633 7.28 11.8833 7 11.8833ZM7 9.8833C6.72 9.8833 6.5 9.6633 6.5 9.3833C6.5 9.1033 6.72 8.8833 7 8.8833C7.28 8.8833 7.5 9.1033 7.5 9.3833C7.5 9.6633 7.28 9.8833 7 9.8833Z" fill={colorCode} />
    </svg>
  );
}
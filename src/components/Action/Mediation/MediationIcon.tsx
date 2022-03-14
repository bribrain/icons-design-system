import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IMediationProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MediationIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IMediationProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 23"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M17 12.3833H11.94C11.6 15.4833 9.68 18.1033 7 19.4333C6.97 21.2433 5.34 22.6633 3.45 22.3333C2.25 22.1233 1.26 21.1333 1.05 19.9333C0.709998 18.0333 2.16 16.3833 4 16.3833C4.95 16.3833 5.78 16.8333 6.33 17.5233C8.23 16.4933 9.59 14.6133 9.91 12.3833H6.81C6.33 13.7233 4.95 14.6233 3.39 14.3233C2.21 14.0933 1.26 13.1233 1.04 11.9433C0.699998 10.0433 2.16 8.3833 4 8.3833C5.3 8.3833 6.4 9.2233 6.82 10.3833H9.92C9.6 8.1533 8.23 6.2833 6.33 5.2433C5.69 6.0433 4.66 6.5233 3.52 6.3433C2.29 6.1533 1.26 5.1533 1.05 3.9233C0.719998 2.0333 2.17 0.383301 4 0.383301C5.64 0.383301 6.96 1.6933 6.99 3.3333C9.67 4.6633 11.59 7.2833 11.93 10.3833H17V8.5933C17 8.1433 17.54 7.9233 17.85 8.2433L20.64 11.0333C20.84 11.2333 20.84 11.5433 20.64 11.7433L17.85 14.5333C17.54 14.8433 17 14.6233 17 14.1733V12.3833Z" fill={colorCode} />
    </svg>
  );
}
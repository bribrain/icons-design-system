import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPermPhoneMsgProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PermPhoneMsgIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPermPhoneMsgProps) {
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
      <path d="M17 0.383301H10C9.45 0.383301 9 0.833301 9 1.3833V10.3833L12 7.3833H17C17.55 7.3833 18 6.9333 18 6.3833V1.3833C18 0.833301 17.55 0.383301 17 0.383301ZM16.23 12.6433L13.69 12.3533C13.08 12.2833 12.48 12.4933 12.05 12.9233L10.21 14.7633C7.38 13.3233 5.05999 11.0133 3.61999 8.1733L5.47 6.3233C5.89999 5.8933 6.10999 5.2933 6.03999 4.6833L5.74999 2.1633C5.62999 1.1533 4.77999 0.393301 3.76 0.393301H2.03C0.899995 0.393301 -0.0400051 1.3333 0.0299949 2.4633C0.559995 11.0033 7.39 17.8233 15.92 18.3533C17.05 18.4233 17.99 17.4833 17.99 16.3533V14.6233C18 13.6133 17.24 12.7633 16.23 12.6433Z" fill={colorCode} />
    </svg>
  );
}
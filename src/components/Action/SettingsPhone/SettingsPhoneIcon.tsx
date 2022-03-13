import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsPhoneProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsPhoneIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsPhoneProps) {
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
      <path d="M8.00001 6.38331H10V8.38331H8.00001V6.38331ZM12 6.38331H14V8.38331H12V6.38331ZM16 6.38331H18V8.38331H16V6.38331ZM16.23 12.6433L13.69 12.3533C13.08 12.2833 12.48 12.4933 12.05 12.9233L10.21 14.7633C7.38001 13.3233 5.06001 11.0133 3.62001 8.17331L5.47001 6.32331C5.90001 5.89331 6.11001 5.29331 6.04001 4.68331L5.75001 2.16331C5.63001 1.15331 4.78001 0.393311 3.76001 0.393311H2.03001C0.90001 0.393311 -0.0399899 1.33331 0.0300101 2.46331C0.56001 11.0033 7.39001 17.8233 15.92 18.3533C17.05 18.4233 17.99 17.4833 17.99 16.3533V14.6233C18 13.6133 17.24 12.7633 16.23 12.6433Z" fill={colorCode} />
    </svg>
  );
}
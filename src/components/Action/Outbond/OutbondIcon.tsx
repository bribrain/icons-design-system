import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IOutbondProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function OutbondIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IOutbondProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM11.88 9.9233L7.63 14.1733C7.24 14.5633 6.61 14.5633 6.22 14.1733C5.83 13.7833 5.83 13.1533 6.22 12.7633L10.47 8.5133L9.2 7.2433C8.88 6.9233 9.11 6.3833 9.55 6.3833H13.49C13.77 6.3833 13.99 6.6033 13.99 6.8833V10.8233C13.99 11.2733 13.45 11.4933 13.14 11.1733L11.88 9.9233Z" fill={colorCode} />
    </svg>
  );
}
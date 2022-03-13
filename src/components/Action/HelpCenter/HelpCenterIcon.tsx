import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHelpCenterProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HelpCenterIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHelpCenterProps) {
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
      <path d="M16 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM9.01 15.3833C8.31 15.3833 7.75 14.8233 7.75 14.1233C7.75 13.4133 8.31 12.8733 9.01 12.8733C9.72 12.8733 10.26 13.4133 10.26 14.1233C10.25 14.8133 9.72 15.3833 9.01 15.3833ZM12.02 7.9833C11.26 9.0933 10.54 9.4433 10.15 10.1533C10.05 10.3333 9.99 10.4733 9.96 10.7833C9.91 11.2333 9.51 11.5633 9.06 11.5633H9C8.48 11.5633 8.07 11.1233 8.12 10.6033C8.15 10.2633 8.23 9.9133 8.42 9.5733C8.91 8.7033 9.84 8.1833 10.38 7.4133C10.95 6.6033 10.63 5.0833 9.01 5.0833C8.3 5.0833 7.83 5.4433 7.54 5.8733C7.29 6.2333 6.85 6.4033 6.44 6.2333C5.91 6.0233 5.72 5.3833 6.04 4.9233C6.65 4.0333 7.67 3.3833 8.99 3.3833C10.47 3.3833 11.48 4.0533 12 4.9033C12.44 5.6233 12.7 6.9733 12.02 7.9833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILoyaltyProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LoyaltyIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILoyaltyProps) {
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
      <path d="M19.41 9.9633L10.41 0.963301C10.05 0.603301 9.55 0.383301 9 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V9.3833C0 9.9333 0.22 10.4333 0.59 10.8033L9.59 19.8033C9.95 20.1633 10.45 20.3833 11 20.3833C11.55 20.3833 12.05 20.1633 12.41 19.7933L19.41 12.7933C19.78 12.4333 20 11.9333 20 11.3833C20 10.8333 19.77 10.3233 19.41 9.9633ZM3.5 5.3833C2.67 5.3833 2 4.7133 2 3.8833C2 3.0533 2.67 2.3833 3.5 2.3833C4.33 2.3833 5 3.0533 5 3.8833C5 4.7133 4.33 5.3833 3.5 5.3833ZM15.27 13.6533L11.35 17.5733C11.15 17.7733 10.84 17.7733 10.64 17.5733L6.72 13.6533C6.15 13.0733 5.85 12.2233 6.05 11.3133C6.24 10.4333 6.94 9.7033 7.81 9.4733C8.75 9.2233 9.66 9.5133 10.25 10.1233L11 10.8433L11.73 10.1133C12.18 9.6633 12.81 9.3833 13.5 9.3833C14.88 9.3833 16 10.5033 16 11.8833C16 12.5733 15.72 13.2033 15.27 13.6533Z" fill={colorCode} />
    </svg>
  );
}
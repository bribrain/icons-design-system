import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDonutLargeProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DonutLargeIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDonutLargeProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.07 3.70333C14.26 4.38333 16 6.12333 16.68 8.31333C16.87 8.94333 17.44 9.38333 18.09 9.38333H18.13C19.13 9.38333 19.85 8.42333 19.56 7.47333C18.59 4.29333 16.08 1.78333 12.9 0.813334C11.96 0.523334 11 1.24333 11 2.24333V2.28333C11 2.94333 11.44 3.51333 12.07 3.70333ZM16.68 12.4533C16 14.6533 14.26 16.3833 12.07 17.0633C11.44 17.2533 11 17.8233 11 18.4733V18.5133C11 19.5133 11.96 20.2333 12.91 19.9433C16.09 18.9733 18.6 16.4633 19.57 13.2833C19.86 12.3333 19.14 11.3733 18.15 11.3733H18.1C17.44 11.3833 16.87 11.8233 16.68 12.4533ZM9 18.4933C9 17.8233 8.55 17.2533 7.91 17.0533C5.07 16.1633 3 13.5133 3 10.3833C3 7.25333 5.07 4.60333 7.91 3.71333C8.55 3.51333 9 2.94333 9 2.27333V2.26333C9 1.26333 8.03 0.523334 7.07 0.823334C2.98 2.07333 0 5.88333 0 10.3833C0 14.8833 2.98 18.6933 7.07 19.9433C8.03 20.2433 9 19.5033 9 18.4933Z" fill={colorCode} />
    </svg>
  );
}
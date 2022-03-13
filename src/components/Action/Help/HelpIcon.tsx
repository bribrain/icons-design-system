import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHelpProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HelpIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHelpProps) {
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
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM11 17.3833H9V15.3833H11V17.3833ZM13.07 9.6333L12.17 10.5533C11.67 11.0633 11.31 11.5233 11.13 12.2433C11.05 12.5633 11 12.9233 11 13.3833H9V12.8833C9 12.4233 9.08 11.9833 9.22 11.5733C9.42 10.9933 9.75 10.4733 10.17 10.0533L11.41 8.7933C11.87 8.3533 12.09 7.6933 11.96 6.9933C11.83 6.2733 11.27 5.6633 10.57 5.4633C9.46 5.1533 8.43 5.7833 8.1 6.7333C7.98 7.1033 7.67 7.3833 7.28 7.3833H6.98C6.4 7.3833 6 6.8233 6.16 6.2633C6.59 4.7933 7.84 3.6733 9.39 3.4333C10.91 3.1933 12.36 3.9833 13.26 5.2333C14.44 6.8633 14.09 8.6133 13.07 9.6333Z" fill={colorCode} />
    </svg>
  );
}
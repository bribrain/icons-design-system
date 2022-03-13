import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITextRotateVerticalProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TextRotateVerticalIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITextRotateVerticalProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1.3833C11.54 1.3833 11.13 1.6533 10.95 2.0733L7.07 11.0433C6.8 11.6733 7.27 12.3833 7.96 12.3833C8.35 12.3833 8.7 12.1433 8.85 11.7833L9.51 10.1833H14.51L15.17 11.7833C15.32 12.1433 15.67 12.3833 16.06 12.3833C16.75 12.3833 17.21 11.6733 16.94 11.0433L13.06 2.0733C12.87 1.6533 12.46 1.3833 12 1.3833ZM10.13 8.3833L12 3.3633L13.87 8.3833H10.13ZM3.35 16.0233L5.14 14.2333C5.46 13.9233 5.24 13.3833 4.79 13.3833H4V1.3833C4 0.833301 3.55 0.383301 3 0.383301C2.45 0.383301 2 0.823301 2 1.3833V13.3833H1.21C0.76 13.3833 0.54 13.9233 0.86 14.2333L2.65 16.0233C2.84 16.2233 3.16 16.2233 3.35 16.0233Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITextRotationNoneProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TextRotationNoneIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITextRotationNoneProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.65 15.0333L13.86 13.2433C13.54 12.9233 13 13.1433 13 13.5933V14.3833H1C0.45 14.3833 0 14.8333 0 15.3833C0 15.9333 0.45 16.3833 1 16.3833H13V17.1733C13 17.6233 13.54 17.8433 13.85 17.5233L15.64 15.7333C15.84 15.5433 15.84 15.2233 15.65 15.0333ZM4.5 9.1833H9.5L10.16 10.7833C10.31 11.1433 10.66 11.3833 11.05 11.3833C11.74 11.3833 12.2 10.6733 11.93 10.0433L8.05 1.0733C7.87 0.653301 7.46 0.383301 7 0.383301C6.54 0.383301 6.13 0.653301 5.95 1.0733L2.07 10.0433C1.8 10.6733 2.27 11.3833 2.96 11.3833C3.35 11.3833 3.7 11.1433 3.85 10.7833L4.5 9.1833ZM7 2.3633L8.87 7.3833H5.13L7 2.3633Z" fill={colorCode} />
    </svg>
  );
}
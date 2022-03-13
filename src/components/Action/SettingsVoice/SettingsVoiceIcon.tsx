import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsVoiceProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsVoiceIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsVoiceProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 23.3833H4V21.3833H2V23.3833ZM7 12.3833C8.66 12.3833 9.99 11.0433 9.99 9.3833L10 3.3833C10 1.7233 8.66 0.383301 7 0.383301C5.34 0.383301 4 1.7233 4 3.3833V9.3833C4 11.0433 5.34 12.3833 7 12.3833ZM6 23.3833H8V21.3833H6V23.3833ZM10 23.3833H12V21.3833H10V23.3833ZM13.08 9.3833C12.66 9.3833 12.31 9.6833 12.25 10.0933C11.88 12.7033 9.53 14.4833 7 14.4833C4.47 14.4833 2.12 12.7133 1.75 10.0933C1.69 9.6833 1.33 9.3833 0.919997 9.3833C0.399997 9.3833 -2.96533e-06 9.8433 0.069997 10.3533C0.529997 13.3133 3.03 15.6533 6 16.1033V18.3833C6 18.9333 6.45 19.3833 7 19.3833C7.55 19.3833 8 18.9333 8 18.3833V16.1033C10.96 15.6633 13.47 13.3133 13.93 10.3533C14 9.8433 13.6 9.3833 13.08 9.3833Z" fill={colorCode} />
    </svg>
  );
}
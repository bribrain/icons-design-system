import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsInputHdmiProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsInputHdmiIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsInputHdmiProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 5.3833V2.3833C13 1.2833 12.1 0.383301 11 0.383301H3C1.9 0.383301 1 1.2833 1 2.3833V5.3833C0.45 5.3833 0 5.8333 0 6.3833V11.0833C0 11.2833 0.0600001 11.4733 0.17 11.6333L3 17.3833V19.3833C3 19.9333 3.45 20.3833 4 20.3833H10C10.55 20.3833 11 19.9333 11 19.3833V17.3833L13.83 11.6333C13.94 11.4733 14 11.2733 14 11.0833V6.3833C14 5.8333 13.55 5.3833 13 5.3833ZM11 5.3833H9V3.8833C9 3.6033 8.78 3.3833 8.5 3.3833C8.22 3.3833 8 3.6033 8 3.8833V5.3833H6V3.8833C6 3.6033 5.78 3.3833 5.5 3.3833C5.22 3.3833 5 3.6033 5 3.8833V5.3833H3V2.3833H11V5.3833Z" fill={colorCode} />
    </svg>
  );
}
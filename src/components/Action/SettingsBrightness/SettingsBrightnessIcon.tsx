import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsBrightnessProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsBrightnessIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsBrightnessProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H20C21.1 18.3833 22 17.4833 22 16.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM19 16.3933H3C2.45 16.3933 2 15.9433 2 15.3933V3.3733C2 2.8233 2.45 2.3733 3 2.3733H19C19.55 2.3733 20 2.8233 20 3.3733V15.3933C20 15.9433 19.55 16.3933 19 16.3933ZM7.5 13.3833H9.5L10.65 14.5333C10.85 14.7333 11.16 14.7333 11.36 14.5333L12.5 13.3833H14.5C14.78 13.3833 15 13.1633 15 12.8833V10.8833L16.15 9.7333C16.35 9.5333 16.35 9.2233 16.15 9.0233L15 7.8833V5.8833C15 5.6033 14.78 5.3833 14.5 5.3833H12.5L11.35 4.2333C11.15 4.0333 10.84 4.0333 10.64 4.2333L9.5 5.3833H7.5C7.22 5.3833 7 5.6033 7 5.8833V7.8833L5.85 9.0333C5.65 9.2333 5.65 9.5433 5.85 9.7433L7 10.8833V12.8833C7 13.1633 7.22 13.3833 7.5 13.3833ZM11 6.3833C12.66 6.3833 14 7.7233 14 9.3833C14 11.0433 12.66 12.3833 11 12.3833V6.3833Z" fill={colorCode} />
    </svg>
  );
}
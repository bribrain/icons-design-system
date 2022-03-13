import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsOverscanProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsOverscanIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsOverscanProps) {
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
      <path d="M10.62 3.3733L9 5.3833H13L11.4 3.3733C11.2 3.1233 10.82 3.1233 10.62 3.3733ZM17 7.3833V11.3833L19.01 9.7833C19.26 9.5833 19.26 9.2033 19.01 9.0033L17 7.3833ZM5 7.3833L2.99 9.0033C2.74 9.2033 2.74 9.5833 2.99 9.7833L5 11.3833V7.3833ZM13 13.3833H9L10.62 15.3933C10.82 15.6433 11.2 15.6433 11.4 15.3933L13 13.3833ZM20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H20C21.1 18.3833 22 17.4833 22 16.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM19 16.3933H3C2.45 16.3933 2 15.9433 2 15.3933V3.3733C2 2.8233 2.45 2.3733 3 2.3733H19C19.55 2.3733 20 2.8233 20 3.3733V15.3933C20 15.9433 19.55 16.3933 19 16.3933Z" fill={colorCode} />
    </svg>
  );
}
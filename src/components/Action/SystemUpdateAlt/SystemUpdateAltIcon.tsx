import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISystemUpdateAltProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SystemUpdateAltIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISystemUpdateAltProps) {
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
      <path d="M11.35 13.0333L14.14 10.2433C14.45 9.9333 14.23 9.3933 13.79 9.3933H12V1.3833C12 0.833301 11.55 0.383301 11 0.383301C10.45 0.383301 10 0.833301 10 1.3833V9.3833H8.21C7.76 9.3833 7.54 9.9233 7.86 10.2333L10.65 13.0233C10.84 13.2233 11.16 13.2233 11.35 13.0333ZM20 0.383301H14.99C14.45 0.383301 14 0.833301 14 1.3733C14 1.9233 14.45 2.3633 14.99 2.3633H19C19.55 2.3633 20 2.8133 20 3.3633V15.3933C20 15.9433 19.55 16.3933 19 16.3933H3C2.45 16.3933 2 15.9433 2 15.3933V3.3733C2 2.8233 2.45 2.3733 3 2.3733H7.01C7.55 2.3733 8 1.9233 8 1.3833C8 0.833301 7.55 0.383301 7.01 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H20C21.1 18.3833 22 17.4833 22 16.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPermScanWifiProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PermScanWifiIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPermScanWifiProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0.383301C7.41 0.383301 3.86 1.9133 0.890003 3.9733C0.400003 4.3033 0.300003 4.9733 0.670003 5.4333L10.45 17.4733C11.25 18.4533 12.75 18.4633 13.55 17.4733L23.33 5.4533C23.7 4.9933 23.6 4.3233 23.11 3.9933C20.14 1.9233 16.59 0.383301 12 0.383301ZM12 13.3833C11.45 13.3833 11 12.9333 11 12.3833V8.3833C11 7.8333 11.45 7.3833 12 7.3833C12.55 7.3833 13 7.8333 13 8.3833V12.3833C13 12.9333 12.55 13.3833 12 13.3833ZM11 5.3833V3.3833H13V5.3833H11Z" fill={colorCode} />
    </svg>
  );
}
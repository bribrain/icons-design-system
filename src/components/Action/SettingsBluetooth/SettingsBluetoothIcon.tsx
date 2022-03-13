import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsBluetoothProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsBluetoothIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsBluetoothProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 13 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 22.3833H8V24.3833H6V22.3833ZM2 22.3833H4V24.3833H2V22.3833ZM10 22.3833H12V24.3833H10V22.3833ZM8.41 10.3833L12.03 6.76328C12.22 6.57328 12.32 6.32328 12.32 6.05328C12.32 5.78328 12.21 5.53328 12.03 5.34328L7.7 1.03327C7.41 0.743275 6.98 0.663275 6.61 0.813275C6.24 0.963275 6 1.33327 6 1.73327V7.96327L2.14 4.11328C1.75 3.72328 1.12 3.72328 0.73 4.11328C0.34 4.50327 0.34 5.13328 0.73 5.52327L5.58 10.3833L0.73 15.2333C0.34 15.6233 0.34 16.2533 0.73 16.6433C1.12 17.0333 1.75 17.0333 2.14 16.6433L6 12.7933V19.0233C6 19.4233 6.24 19.7933 6.62 19.9433C6.74 19.9933 6.87 20.0233 7 20.0233C7.26 20.0233 7.52 19.9233 7.71 19.7333L12.03 15.4133C12.22 15.2233 12.32 14.9733 12.32 14.7033C12.32 14.4333 12.21 14.1833 12.03 13.9933L8.41 10.3833ZM8 4.15328L9.91 6.06327L8 7.96327V4.15328ZM8 16.6133V12.7933L9.91 14.7033L8 16.6133Z" fill={colorCode} />
    </svg>
  );
}
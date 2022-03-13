import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IWifiProtectedSetupProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WifiProtectedSetupIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IWifiProtectedSetupProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.7 2.68331L14.14 1.24331C14.46 0.92331 14.23 0.393311 13.79 0.393311H7.5C7.22 0.393311 7 0.613311 7 0.893311V7.18331C7 7.63331 7.54 7.85331 7.85 7.53331L9.3 6.08331C11.27 7.54331 12.55 9.86331 12.55 12.5033C12.55 13.1633 12.47 13.8133 12.31 14.4233C12.19 14.9233 12.79 15.2833 13.15 14.9133C14.63 13.3833 15.55 11.3033 15.55 9.00331C15.55 6.49331 14.44 4.24331 12.7 2.68331Z" fill={colorCode} />
      <path d="M8.15 11.2433L6.7 12.6833C4.73 11.2233 3.45 8.9033 3.45 6.2633C3.45 5.6033 3.53 4.9533 3.69 4.3433C3.81 3.8433 3.21 3.4833 2.85 3.8533C1.37 5.3833 0.450001 7.4633 0.450001 9.7633C0.450001 12.2833 1.55 14.5333 3.29 16.0933L1.85 17.5333C1.53 17.8533 1.76 18.3833 2.2 18.3833H8.49C8.77 18.3833 8.99 18.1633 8.99 17.8833V11.5933C9 11.1533 8.46 10.9233 8.15 11.2433Z" fill={colorCode} />
    </svg>
  );
}
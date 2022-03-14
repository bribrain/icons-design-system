import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.43 11.3633C17.47 11.0433 17.5 10.7233 17.5 10.3833C17.5 10.0433 17.47 9.7233 17.43 9.4033L19.54 7.7533C19.73 7.6033 19.78 7.3333 19.66 7.1133L17.66 3.6533C17.54 3.4333 17.27 3.3533 17.05 3.4333L14.56 4.4333C14.04 4.0333 13.48 3.7033 12.87 3.4533L12.49 0.803301C12.46 0.563301 12.25 0.383301 12 0.383301H8C7.75 0.383301 7.54 0.563301 7.51 0.803301L7.13 3.4533C6.52 3.7033 5.96 4.0433 5.44 4.4333L2.95 3.4333C2.72 3.3433 2.46 3.4333 2.34 3.6533L0.34 7.1133C0.21 7.3333 0.27 7.6033 0.46 7.7533L2.57 9.4033C2.53 9.7233 2.5 10.0533 2.5 10.3833C2.5 10.7133 2.53 11.0433 2.57 11.3633L0.46 13.0133C0.27 13.1633 0.22 13.4333 0.34 13.6533L2.34 17.1133C2.46 17.3333 2.73 17.4133 2.95 17.3333L5.44 16.3333C5.96 16.7333 6.52 17.0633 7.13 17.3133L7.51 19.9633C7.54 20.2033 7.75 20.3833 8 20.3833H12C12.25 20.3833 12.46 20.2033 12.49 19.9633L12.87 17.3133C13.48 17.0633 14.04 16.7233 14.56 16.3333L17.05 17.3333C17.28 17.4233 17.54 17.3333 17.66 17.1133L19.66 13.6533C19.78 13.4333 19.73 13.1633 19.54 13.0133L17.43 11.3633ZM10 13.8833C8.07 13.8833 6.5 12.3133 6.5 10.3833C6.5 8.4533 8.07 6.8833 10 6.8833C11.93 6.8833 13.5 8.4533 13.5 10.3833C13.5 12.3133 11.93 13.8833 10 13.8833Z" fill={colorCode} />
    </svg>
  );
}
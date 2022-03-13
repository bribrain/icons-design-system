import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISupportProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SupportIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISupportProps) {
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
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM17.46 7.5033L14.68 8.6533C14.17 7.2933 13.1 6.2133 11.73 5.7133L12.88 2.9333C14.98 3.7333 16.65 5.4033 17.46 7.5033ZM10 13.3833C8.34 13.3833 7 12.0433 7 10.3833C7 8.7233 8.34 7.3833 10 7.3833C11.66 7.3833 13 8.7233 13 10.3833C13 12.0433 11.66 13.3833 10 13.3833ZM7.13 2.9233L8.3 5.7033C6.92 6.2033 5.83 7.2933 5.32 8.6733L2.54 7.5133C3.35 5.4033 5.02 3.7333 7.13 2.9233ZM2.54 13.2533L5.32 12.1033C5.83 13.4833 6.91 14.5633 8.29 15.0633L7.12 17.8433C5.02 17.0333 3.35 15.3633 2.54 13.2533ZM12.88 17.8433L11.73 15.0633C13.1 14.5533 14.18 13.4733 14.68 12.0933L17.46 13.2633C16.65 15.3633 14.98 17.0333 12.88 17.8433Z" fill={colorCode} />
    </svg>
  );
}
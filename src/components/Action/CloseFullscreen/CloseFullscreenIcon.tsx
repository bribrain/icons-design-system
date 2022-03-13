import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICloseFullscreenProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CloseFullscreenIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICloseFullscreenProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.29 2.50327L14.7 7.09327L16.29 8.68327C16.92 9.31327 16.47 10.3933 15.58 10.3933H11C10.45 10.3933 10 9.94327 10 9.39327V4.79327C10 3.90327 11.08 3.45327 11.71 4.08327L13.3 5.67327L17.89 1.08327C18.28 0.693271 18.91 0.693271 19.3 1.08327C19.68 1.48327 19.68 2.11327 19.29 2.50327ZM2.12 19.6733L6.71 15.0833L8.3 16.6733C8.93 17.3033 10.01 16.8533 10.01 15.9633V11.3833C10.01 10.8333 9.56 10.3833 9.01 10.3833H4.41C3.52 10.3833 3.07 11.4633 3.7 12.0933L5.29 13.6833L0.700001 18.2733C0.310001 18.6633 0.310001 19.2933 0.700001 19.6833C1.1 20.0633 1.73 20.0633 2.12 19.6733Z" fill={colorCode} />
    </svg>
  );
}
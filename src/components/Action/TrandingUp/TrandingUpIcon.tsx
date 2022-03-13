import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITrandingUpProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TrandingUpIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITrandingUpProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.85 1.2333L16.29 2.6733L11.41 7.5533L8.12 4.2633C7.73 3.8733 7.1 3.8733 6.71 4.2633L0.709996 10.2733C0.319996 10.6633 0.319996 11.2933 0.709996 11.6833C1.1 12.0733 1.73 12.0733 2.12 11.6833L7.41 6.3833L10.7 9.6733C11.09 10.0633 11.72 10.0633 12.11 9.6733L17.7 4.0933L19.14 5.5333C19.45 5.8433 19.99 5.6233 19.99 5.1833V0.883301C20 0.603301 19.78 0.383301 19.5 0.383301H15.21C14.76 0.383301 14.54 0.923301 14.85 1.2333V1.2333Z" fill={colorCode} />
    </svg>
  );
}
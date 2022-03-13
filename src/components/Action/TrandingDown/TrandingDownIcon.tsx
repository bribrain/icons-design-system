import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITrandingDownProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TrandingDownIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITrandingDownProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.85 11.5333L16.29 10.0933L11.41 5.2133L8.12001 8.5033C7.73001 8.8933 7.10001 8.8933 6.71001 8.5033L0.710011 2.4933C0.320011 2.1033 0.320011 1.4733 0.710011 1.0833C1.10001 0.693302 1.73001 0.693302 2.12001 1.0833L7.41001 6.3833L10.7 3.0933C11.09 2.7033 11.72 2.7033 12.11 3.0933L17.7 8.6733L19.14 7.2333C19.45 6.9233 19.99 7.1433 19.99 7.5833V11.8733C19.99 12.1533 19.77 12.3733 19.49 12.3733H15.2C14.76 12.3833 14.54 11.8433 14.85 11.5333Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPrivacyTipProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PrivacyTipIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPrivacyTipProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.19 3.8533C0.47 4.1733 0 4.8933 0 5.6833V10.3833C0 15.9333 3.84 21.1233 9 22.3833C14.16 21.1233 18 15.9333 18 10.3833V5.6833C18 4.8933 17.53 4.1733 16.81 3.8533L9.81 0.743301C9.29 0.513301 8.7 0.513301 8.19 0.743301L1.19 3.8533ZM9 6.3833C9.55 6.3833 10 6.8333 10 7.3833C10 7.9333 9.55 8.3833 9 8.3833C8.45 8.3833 8 7.9333 8 7.3833C8 6.8333 8.45 6.3833 9 6.3833ZM9 10.3833C9.55 10.3833 10 10.8333 10 11.3833V15.3833C10 15.9333 9.55 16.3833 9 16.3833C8.45 16.3833 8 15.9333 8 15.3833V11.3833C8 10.8333 8.45 10.3833 9 10.3833Z" fill={colorCode} />
    </svg>
  );
}
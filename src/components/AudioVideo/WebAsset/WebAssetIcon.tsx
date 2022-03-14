import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IWebAssetIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WebAssetIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IWebAssetIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.89 16.3833 2 16.3833H16C17.1 16.3833 18 15.4833 18 14.3833V2.3833C18 1.2833 17.11 0.383301 16 0.383301ZM15 14.3833H3C2.45 14.3833 2 13.9333 2 13.3833V4.3833H16V13.3833C16 13.9333 15.55 14.3833 15 14.3833Z" fill={colorCode} />
    </svg>
  );
}
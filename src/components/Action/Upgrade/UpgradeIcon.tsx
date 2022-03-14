import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IUpgradeProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function UpgradeIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IUpgradeProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 8 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 15.3833C8 15.9333 7.55 16.3833 7 16.3833H1C0.45 16.3833 0 15.9333 0 15.3833C0 14.8333 0.45 14.3833 1 14.3833H7C7.55 14.3833 8 14.8333 8 15.3833ZM3 4.3733V11.3833C3 11.9333 3.45 12.3833 4 12.3833C4.55 12.3833 5 11.9333 5 11.3833V4.3733H6.79C7.24 4.3733 7.46 3.8333 7.14 3.5233L4.35 0.7433C4.15 0.5533 3.84 0.5533 3.64 0.7433L0.86 3.5233C0.54 3.8333 0.76 4.3733 1.21 4.3733H3Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFiberManualRecordIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FiberManualRecordIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFiberManualRecordIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 16.3833C12.4183 16.3833 16 12.8016 16 8.3833C16 3.96502 12.4183 0.383301 8 0.383301C3.58172 0.383301 0 3.96502 0 8.3833C0 12.8016 3.58172 16.3833 8 16.3833Z" fill={colorCode} />
    </svg>
  );
}
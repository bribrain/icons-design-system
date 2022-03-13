import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPolymerProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PolymerIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPolymerProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 0.383301H15L7.11 13.0133L4.5 8.3833L9 0.383301H5L0.5 8.3833L5 16.3833H9L16.89 3.7533L19.5 8.3833L15 16.3833H19L23.5 8.3833L19 0.383301Z" fill={colorCode} />
    </svg>
  );
}
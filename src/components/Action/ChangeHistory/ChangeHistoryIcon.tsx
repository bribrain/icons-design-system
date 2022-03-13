import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IChangeHistoryProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ChangeHistoryIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IChangeHistoryProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 3.15325L16.39 13.3833H3.61L10 3.15325ZM9.15 0.743252L0.950003 13.8533C0.540003 14.5233 1.02 15.3833 1.8 15.3833H18.2C18.99 15.3833 19.46 14.5233 19.05 13.8533L10.85 0.743252C10.46 0.113252 9.54 0.113252 9.15 0.743252V0.743252Z" fill={colorCode} />
    </svg>
  );
}
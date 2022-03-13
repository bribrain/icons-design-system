import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILabelImportantOutlineProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LabelImportantOutlineIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILabelImportantOutlineProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M12 14.3833H1.82999C1.03999 14.3833 0.559987 13.5033 0.989987 12.8433L4.49999 7.3833L0.989987 1.9233C0.559987 1.2633 1.03999 0.383301 1.82999 0.383301H12C12.65 0.383301 13.26 0.693301 13.63 1.2233L17.59 6.8033C17.84 7.1533 17.84 7.6133 17.59 7.9633L13.63 13.5433C13.26 14.0633 12.65 14.3833 12 14.3833ZM3.49999 12.3833H12L15.5 7.3833L12 2.3833H3.49999L6.99999 7.3833L3.49999 12.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IReportProblemProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ReportProblemIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IReportProblemProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.73 18.3833H20.26C21.03 18.3833 21.51 17.5533 21.13 16.8833L11.86 0.883298C11.47 0.213298 10.51 0.213298 10.13 0.883298L0.859999 16.8833C0.479999 17.5533 0.959999 18.3833 1.73 18.3833ZM12 15.3833H10V13.3833H12V15.3833ZM11 11.3833C10.45 11.3833 10 10.9333 10 10.3833V8.3833C10 7.8333 10.45 7.3833 11 7.3833C11.55 7.3833 12 7.8333 12 8.3833V10.3833C12 10.9333 11.55 11.3833 11 11.3833Z" fill={colorCode} />
    </svg>
  );
}
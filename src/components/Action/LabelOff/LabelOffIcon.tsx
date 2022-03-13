import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILabelOffProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LabelOffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILabelOffProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M19.59 9.96325C19.84 9.61325 19.84 9.15325 19.59 8.80325L15.63 3.22325C15.27 2.71325 14.67 2.38325 14 2.38325H6.66001L17.36 13.1132L19.59 9.96325ZM0.720009 2.10325L1.59001 2.97325C1.23001 3.33325 1.00001 3.83325 1.00001 4.38325V14.3832C1.00001 15.4832 1.90001 16.3832 3.00001 16.3832H15L16.29 17.6732C16.68 18.0632 17.31 18.0632 17.7 17.6732C18.09 17.2832 18.09 16.6532 17.7 16.2632L2.14001 0.693248C1.76001 0.313248 1.13001 0.303248 0.740009 0.683248C0.330009 1.06325 0.330009 1.71325 0.720009 2.10325Z" fill={colorCode} />
    </svg>
  );
}
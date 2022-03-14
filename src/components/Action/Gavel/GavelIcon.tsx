import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IGavelProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function GavelIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IGavelProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 19.3834H11C11.55 19.3834 12 19.8334 12 20.3834C12 20.9333 11.55 21.3834 11 21.3834H1C0.45 21.3834 0 20.9333 0 20.3834C0 19.8334 0.45 19.3834 1 19.3834ZM4.24 6.45335L7.07 3.62335L19.8 16.3533C20.58 17.1334 20.58 18.4033 19.8 19.1833C19.02 19.9634 17.75 19.9634 16.97 19.1833L4.24 6.45335ZM12.73 0.793351L15.56 3.62335C16.34 4.40335 16.34 5.67335 15.56 6.45335L14.14 7.87335L8.49 2.21335L9.9 0.803351C10.68 0.0133507 11.95 0.0133507 12.73 0.793351ZM2.83 7.86335L8.49 13.5234L7.08 14.9333C6.3 15.7133 5.03 15.7133 4.25 14.9333L1.42 12.1034C0.64 11.3234 0.64 10.0534 1.42 9.27335L2.83 7.86335Z" fill={colorCode} />
    </svg>
  );
}
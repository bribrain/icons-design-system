import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDonutSmallProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DonutSmallIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDonutSmallProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 1.56326V19.2033C9 19.8433 8.41 20.3233 7.79 20.1833C3.32 19.1833 0 15.1733 0 10.3833C0 5.59326 3.32 1.58326 7.79 0.583255C8.41 0.443255 9 0.923255 9 1.56326ZM11.03 1.56326V8.37325C11.03 8.92325 11.48 9.37325 12.03 9.37325H18.82C19.46 9.37325 19.94 8.78326 19.8 8.15326C18.95 4.39326 16 1.43326 12.25 0.583255C11.62 0.443255 11.03 0.923255 11.03 1.56326ZM11.03 12.3933V19.2033C11.03 19.8433 11.62 20.3233 12.25 20.1833C16.01 19.3333 18.96 16.3633 19.81 12.6033C19.95 11.9833 19.46 11.3833 18.83 11.3833H12.04C11.48 11.3933 11.03 11.8433 11.03 12.3933Z" fill={colorCode} />
    </svg>
  );
}
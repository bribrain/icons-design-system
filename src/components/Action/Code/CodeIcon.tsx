import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICodeProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CodeIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICodeProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.70001 10.2833L2.80001 6.38327L6.70001 2.48327C7.09001 2.09327 7.09001 1.47327 6.70001 1.08327C6.31001 0.693271 5.69001 0.693271 5.30001 1.08327L0.710011 5.67327C0.320011 6.06327 0.320011 6.69327 0.710011 7.08327L5.30001 11.6833C5.69001 12.0733 6.31001 12.0733 6.70001 11.6833C7.09001 11.2933 7.09001 10.6733 6.70001 10.2833ZM13.3 10.2833L17.2 6.38327L13.3 2.48327C12.91 2.09327 12.91 1.47327 13.3 1.08327C13.69 0.693271 14.31 0.693271 14.7 1.08327L19.29 5.67327C19.68 6.06327 19.68 6.69327 19.29 7.08327L14.7 11.6833C14.31 12.0733 13.69 12.0733 13.3 11.6833C12.91 11.2933 12.91 10.6733 13.3 10.2833Z" fill={colorCode} />
    </svg>
  );
}
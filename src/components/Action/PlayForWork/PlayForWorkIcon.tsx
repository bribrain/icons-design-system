import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPlayForWorkProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PlayForWorkIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPlayForWorkProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.00001 1.3833V5.9733H2.71001C2.26001 5.9733 2.04001 6.5133 2.36001 6.8233L5.65001 10.1133C5.85001 10.3133 6.16001 10.3133 6.36001 10.1133L9.65001 6.8233C9.96001 6.5133 9.74001 5.9733 9.30001 5.9733H7.00001V1.3833C7.00001 0.833301 6.55001 0.383301 6.00001 0.383301C5.45001 0.383301 5.00001 0.833301 5.00001 1.3833ZM1.10001 9.3833C0.490013 9.3833 -0.00998634 9.9333 0.110014 10.5333C0.650014 13.2933 3.08001 15.3833 6.00001 15.3833C8.92001 15.3833 11.35 13.2933 11.89 10.5333C12.01 9.9333 11.51 9.3833 10.9 9.3833C10.41 9.3833 10.02 9.7333 9.92001 10.2133C9.53001 12.0233 7.93001 13.3833 6.00001 13.3833C4.07001 13.3833 2.47001 12.0233 2.09001 10.2133C1.99001 9.7333 1.59001 9.3833 1.10001 9.3833Z" fill={colorCode} />
    </svg>
  );
}
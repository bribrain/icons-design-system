import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPermMediaProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PermMediaIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPermMediaProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 4.3833C0.45 4.3833 0 4.8333 0 5.3833V9.3833H0.01L0 18.3833C0 19.4833 0.9 20.3833 2 20.3833H19C19.55 20.3833 20 19.9333 20 19.3833C20 18.8333 19.55 18.3833 19 18.3833H3C2.45 18.3833 2 17.9333 2 17.3833V5.3833C2 4.8333 1.55 4.3833 1 4.3833ZM22 2.3833H14L12.59 0.973301C12.21 0.593301 11.7 0.383301 11.17 0.383301H6C4.9 0.383301 4.01 1.2833 4.01 2.3833L4 14.3833C4 15.4833 4.9 16.3833 6 16.3833H22C23.1 16.3833 24 15.4833 24 14.3833V4.3833C24 3.2833 23.1 2.3833 22 2.3833ZM7.6 12.5833L11.11 7.9033C11.31 7.6433 11.7 7.6333 11.91 7.8933L15.01 11.8833L17.11 9.3533C17.31 9.1033 17.69 9.1133 17.89 9.3633L20.38 12.5633C20.64 12.8933 20.4 13.3733 19.99 13.3733H8C7.59 13.3833 7.35 12.9133 7.6 12.5833Z" fill={colorCode} />
    </svg>
  );
}
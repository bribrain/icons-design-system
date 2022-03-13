import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IStoreProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function StoreIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IStoreProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 2.3833H17C17.55 2.3833 18 1.9333 18 1.3833C18 0.833301 17.55 0.383301 17 0.383301H3C2.45 0.383301 2 0.833301 2 1.3833C2 1.9333 2.45 2.3833 3 2.3833ZM18.16 4.1833C18.07 3.7233 17.66 3.3833 17.18 3.3833H2.82C2.34 3.3833 1.93 3.7233 1.84 4.1833L0.840001 9.1833C0.720001 9.8033 1.19 10.3833 1.82 10.3833H2V15.3833C2 15.9333 2.45 16.3833 3 16.3833H11C11.55 16.3833 12 15.9333 12 15.3833V10.3833H16V15.3833C16 15.9333 16.45 16.3833 17 16.3833C17.55 16.3833 18 15.9333 18 15.3833V10.3833H18.18C18.81 10.3833 19.28 9.8033 19.16 9.1833L18.16 4.1833ZM10 14.3833H4V10.3833H10V14.3833Z" fill={colorCode} />
    </svg>
  );
}
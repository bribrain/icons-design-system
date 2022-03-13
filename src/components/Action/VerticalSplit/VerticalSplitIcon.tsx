import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVerticalSplitProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VerticalSplitIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVerticalSplitProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 10.3833H7C7.55 10.3833 8 9.9333 8 9.3833C8 8.8333 7.55 8.3833 7 8.3833H1C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833ZM1 14.3833H7C7.55 14.3833 8 13.9333 8 13.3833C8 12.8333 7.55 12.3833 7 12.3833H1C0.45 12.3833 0 12.8333 0 13.3833C0 13.9333 0.45 14.3833 1 14.3833ZM1 6.3833H7C7.55 6.3833 8 5.9333 8 5.3833C8 4.8333 7.55 4.3833 7 4.3833H1C0.45 4.3833 0 4.8333 0 5.3833C0 5.9333 0.45 6.3833 1 6.3833ZM0 1.3833C0 1.9333 0.45 2.3833 1 2.3833H7C7.55 2.3833 8 1.9333 8 1.3833C8 0.833301 7.55 0.383301 7 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833ZM11 0.383301H17C17.55 0.383301 18 0.833301 18 1.3833V13.3833C18 13.9333 17.55 14.3833 17 14.3833H11C10.45 14.3833 10 13.9333 10 13.3833V1.3833C10 0.833301 10.45 0.383301 11 0.383301Z" fill={colorCode} />
    </svg>
  );
}
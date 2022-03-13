import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPrintProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PrintIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPrintProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 5.3833H3C1.34 5.3833 0 6.7233 0 8.3833V12.3833C0 13.4833 0.9 14.3833 2 14.3833H4V16.3833C4 17.4833 4.9 18.3833 6 18.3833H14C15.1 18.3833 16 17.4833 16 16.3833V14.3833H18C19.1 14.3833 20 13.4833 20 12.3833V8.3833C20 6.7233 18.66 5.3833 17 5.3833ZM13 16.3833H7C6.45 16.3833 6 15.9333 6 15.3833V11.3833H14V15.3833C14 15.9333 13.55 16.3833 13 16.3833ZM17 9.3833C16.45 9.3833 16 8.9333 16 8.3833C16 7.8333 16.45 7.3833 17 7.3833C17.55 7.3833 18 7.8333 18 8.3833C18 8.9333 17.55 9.3833 17 9.3833ZM15 0.383301H5C4.45 0.383301 4 0.833301 4 1.3833V3.3833C4 3.9333 4.45 4.3833 5 4.3833H15C15.55 4.3833 16 3.9333 16 3.3833V1.3833C16 0.833301 15.55 0.383301 15 0.383301Z" fill={colorCode} />
    </svg>
  );
}
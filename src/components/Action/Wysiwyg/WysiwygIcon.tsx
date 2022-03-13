import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IWysiwygProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WysiwygIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IWysiwygProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.89 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.11 0.383301 16 0.383301ZM16 16.3833H2V4.3833H16V16.3833ZM13 9.3833H5C4.45 9.3833 4 8.9333 4 8.3833C4 7.8333 4.45 7.3833 5 7.3833H13C13.55 7.3833 14 7.8333 14 8.3833C14 8.9333 13.55 9.3833 13 9.3833ZM9 13.3833H5C4.45 13.3833 4 12.9333 4 12.3833C4 11.8333 4.45 11.3833 5 11.3833H9C9.55 11.3833 10 11.8333 10 12.3833C10 12.9333 9.55 13.3833 9 13.3833Z" fill={colorCode} />
    </svg>
  );
}
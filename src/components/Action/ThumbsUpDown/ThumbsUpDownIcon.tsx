import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IThumbsUpDownProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ThumbsUpDownIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IThumbsUpDownProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.06 5.3833H5.82L6.48 2.2033C6.56 1.8333 6.44 1.4533 6.18 1.1833C5.74 0.743302 5.03 0.743302 4.6 1.1833L0.6 5.1833C0.21 5.5533 0 6.0633 0 6.5933V12.3833C0 13.4833 0.9 14.3833 2 14.3833H7.92C8.72 14.3833 9.44 13.9033 9.76 13.1733L11.9 8.1733C12.46 6.8533 11.49 5.3833 10.06 5.3833ZM22 10.3833H16.08C15.28 10.3833 14.56 10.8633 14.24 11.5933L12.1 16.5933C11.54 17.9133 12.5 19.3833 13.94 19.3833H18.18L17.52 22.5633C17.44 22.9333 17.56 23.3133 17.82 23.5833C18.26 24.0233 18.97 24.0233 19.4 23.5833L23.4 19.5833C23.78 19.2033 23.99 18.7033 23.99 18.1733V12.3833C24 11.2833 23.1 10.3833 22 10.3833Z" fill={colorCode} />
    </svg>
  );
}
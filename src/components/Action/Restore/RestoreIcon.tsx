import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRestoreProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RestoreIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRestoreProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.26 0.383251C7.17 0.243251 3 4.33325 3 9.38325H1.21C0.76 9.38325 0.54 9.92325 0.86 10.2333L3.65 13.0333C3.85 13.2333 4.16 13.2333 4.36 13.0333L7.15 10.2333C7.46 9.92325 7.24 9.38325 6.79 9.38325H5C5 5.48325 8.18 2.33325 12.1 2.38325C15.82 2.43325 18.95 5.56325 19 9.28325C19.05 13.1933 15.9 16.3833 12 16.3833C10.39 16.3833 8.9 15.8333 7.72 14.9033C7.32 14.5933 6.76 14.6233 6.4 14.9833C5.98 15.4033 6.01 16.1133 6.48 16.4733C8 17.6733 9.91 18.3833 12 18.3833C17.05 18.3833 21.14 14.2133 21 9.12325C20.87 4.43325 16.95 0.513251 12.26 0.383251ZM11.75 5.38325C11.34 5.38325 11 5.72325 11 6.13325V9.81325C11 10.1633 11.19 10.4933 11.49 10.6733L14.61 12.5233C14.97 12.7333 15.43 12.6133 15.64 12.2633C15.85 11.9033 15.73 11.4433 15.38 11.2333L12.5 9.52325V6.12325C12.5 5.72325 12.16 5.38325 11.75 5.38325Z" fill={colorCode} />
    </svg>
  );
}
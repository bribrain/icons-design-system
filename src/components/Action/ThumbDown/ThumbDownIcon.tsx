import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IThumbDownProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ThumbDownIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IThumbDownProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.88 19.3233L16.41 13.7833C16.78 13.4133 16.99 12.9033 16.99 12.3733V2.3833C16.99 1.2833 16.09 0.383301 14.99 0.383301H5.99999C5.19999 0.383301 4.47999 0.863301 4.16999 1.5933L0.909991 9.2033C0.0599911 11.1833 1.50999 13.3833 3.65999 13.3833H9.30999L8.35999 17.9633C8.25999 18.4633 8.40999 18.9733 8.76999 19.3333C9.35999 19.9133 10.3 19.9133 10.88 19.3233ZM21 0.383301C19.9 0.383301 19 1.2833 19 2.3833V10.3833C19 11.4833 19.9 12.3833 21 12.3833C22.1 12.3833 23 11.4833 23 10.3833V2.3833C23 1.2833 22.1 0.383301 21 0.383301Z" fill={colorCode} />
    </svg>
  );
}
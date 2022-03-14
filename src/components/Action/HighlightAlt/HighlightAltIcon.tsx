import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHighlightAltProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HighlightAltIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHighlightAltProps) {
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
      <path d="M14 2.3833H12V0.383301H14V2.3833ZM16 6.3833H18V4.3833H16V6.3833ZM16 10.3833H18V8.3833H16V10.3833ZM8 18.3833H10V16.3833H8V18.3833ZM4 2.3833H6V0.383301H4V2.3833ZM0 14.3833H2V12.3833H0V14.3833ZM2 18.3833V16.3833H0C0 17.4833 0.9 18.3833 2 18.3833ZM16 0.383301V2.3833H18C18 1.2833 17.1 0.383301 16 0.383301ZM8 2.3833H10V0.383301H8V2.3833ZM0 6.3833H2V4.3833H0V6.3833ZM4 18.3833H6V16.3833H4V18.3833ZM0 10.3833H2V8.3833H0V10.3833ZM0 2.3833H2V0.383301C0.9 0.383301 0 1.2833 0 2.3833ZM15.71 14.6733L17.15 13.2333C17.47 12.9133 17.24 12.3833 16.8 12.3833H13C12.45 12.3833 12 12.8333 12 13.3833V17.1733C12 17.6233 12.54 17.8433 12.85 17.5233L14.29 16.0833L16.29 18.0833C16.68 18.4733 17.31 18.4733 17.7 18.0833C18.09 17.6933 18.09 17.0633 17.7 16.6733L15.71 14.6733Z" fill={colorCode} />
    </svg>
  );
}
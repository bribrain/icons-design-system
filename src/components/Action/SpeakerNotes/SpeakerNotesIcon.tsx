import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISpeakerNotesProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SpeakerNotesIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISpeakerNotesProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 0.383301H2C0.9 0.383301 0.00999999 1.2833 0.00999999 2.3833L0 20.3833L4 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301ZM6 12.3833H4V10.3833H6V12.3833ZM6 9.3833H4V7.3833H6V9.3833ZM6 6.3833H4V4.3833H6V6.3833ZM12 12.3833H9C8.45 12.3833 8 11.9333 8 11.3833C8 10.8333 8.45 10.3833 9 10.3833H12C12.55 10.3833 13 10.8333 13 11.3833C13 11.9333 12.55 12.3833 12 12.3833ZM15 9.3833H9C8.45 9.3833 8 8.9333 8 8.3833C8 7.8333 8.45 7.3833 9 7.3833H15C15.55 7.3833 16 7.8333 16 8.3833C16 8.9333 15.55 9.3833 15 9.3833ZM15 6.3833H9C8.45 6.3833 8 5.9333 8 5.3833C8 4.8333 8.45 4.3833 9 4.3833H15C15.55 4.3833 16 4.8333 16 5.3833C16 5.9333 15.55 6.3833 15 6.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHighlightOffProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HighlightOffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHighlightOffProps) {
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
      <path d="M11.89 7.0833L10 8.9733L8.11 7.0833C7.72 6.6933 7.09 6.6933 6.7 7.0833C6.31 7.4733 6.31 8.1033 6.7 8.4933L8.59 10.3833L6.7 12.2733C6.31 12.6633 6.31 13.2933 6.7 13.6833C7.09 14.0733 7.72 14.0733 8.11 13.6833L10 11.7933L11.89 13.6833C12.28 14.0733 12.91 14.0733 13.3 13.6833C13.69 13.2933 13.69 12.6633 13.3 12.2733L11.41 10.3833L13.3 8.4933C13.69 8.1033 13.69 7.4733 13.3 7.0833C12.91 6.7033 12.27 6.7033 11.89 7.0833ZM10 0.383301C4.47 0.383301 0 4.8533 0 10.3833C0 15.9133 4.47 20.3833 10 20.3833C15.53 20.3833 20 15.9133 20 10.3833C20 4.8533 15.53 0.383301 10 0.383301ZM10 18.3833C5.59 18.3833 2 14.7933 2 10.3833C2 5.9733 5.59 2.3833 10 2.3833C14.41 2.3833 18 5.9733 18 10.3833C18 14.7933 14.41 18.3833 10 18.3833Z" fill={colorCode} />
    </svg>
  );
}
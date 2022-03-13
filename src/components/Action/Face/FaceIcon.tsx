import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFaceProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FaceIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFaceProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10.1333C6.31 10.1333 5.75 10.6933 5.75 11.3833C5.75 12.0733 6.31 12.6333 7 12.6333C7.69 12.6333 8.25 12.0733 8.25 11.3833C8.25 10.6933 7.69 10.1333 7 10.1333ZM13 10.1333C12.31 10.1333 11.75 10.6933 11.75 11.3833C11.75 12.0733 12.31 12.6333 13 12.6333C13.69 12.6333 14.25 12.0733 14.25 11.3833C14.25 10.6933 13.69 10.1333 13 10.1333ZM10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM10 18.3833C5.59 18.3833 2 14.7933 2 10.3833C2 10.0933 2.02 9.8033 2.05 9.5233C4.41 8.4733 6.28 6.5433 7.26 4.1533C9.07 6.7133 12.05 8.3833 15.42 8.3833C16.2 8.3833 16.95 8.2933 17.67 8.1233C17.88 8.8333 18 9.5933 18 10.3833C18 14.7933 14.41 18.3833 10 18.3833Z" fill={colorCode} />
    </svg>
  );
}
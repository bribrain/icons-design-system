import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITollProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TollIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITollProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 0.383301C9.58 0.383301 6 3.9633 6 8.3833C6 12.8033 9.58 16.3833 14 16.3833C18.42 16.3833 22 12.8033 22 8.3833C22 3.9633 18.42 0.383301 14 0.383301ZM14 14.3833C10.69 14.3833 8 11.6933 8 8.3833C8 5.0733 10.69 2.3833 14 2.3833C17.31 2.3833 20 5.0733 20 8.3833C20 11.6933 17.31 14.3833 14 14.3833ZM2 8.3833C2 5.9933 3.4 3.9233 5.43 2.9633C5.77 2.8033 6 2.4933 6 2.1233V1.9333C6 1.2533 5.29 0.823301 4.68 1.1133C1.92 2.3733 0 5.1533 0 8.3833C0 11.6133 1.92 14.3933 4.68 15.6533C5.29 15.9333 6 15.5133 6 14.8333V14.6533C6 14.2833 5.77 13.9633 5.43 13.8033C3.4 12.8433 2 10.7733 2 8.3833Z" fill={colorCode} />
    </svg>
  );
}
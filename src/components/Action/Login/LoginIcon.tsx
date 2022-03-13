import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILoginProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LoginIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILoginProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M8.3 5.0833C7.91 5.4733 7.91 6.0933 8.3 6.4833L10.2 8.3833H1C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833H10.2L8.3 12.2833C7.91 12.6733 7.91 13.2933 8.3 13.6833C8.69 14.0733 9.31 14.0733 9.7 13.6833L13.29 10.0933C13.68 9.7033 13.68 9.0733 13.29 8.6833L9.7 5.0833C9.31 4.6933 8.69 4.6933 8.3 5.0833ZM18 16.3833H11C10.45 16.3833 10 16.8333 10 17.3833C10 17.9333 10.45 18.3833 11 18.3833H18C19.1 18.3833 20 17.4833 20 16.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301H11C10.45 0.383301 10 0.833301 10 1.3833C10 1.9333 10.45 2.3833 11 2.3833H18V16.3833Z" fill={colorCode} />
    </svg>
  );
}
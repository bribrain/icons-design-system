import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAppBlockingProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AppBlockingIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAppBlockingProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 7.3833C10.79 7.3833 9 9.1733 9 11.3833C9 13.5933 10.79 15.3833 13 15.3833C15.21 15.3833 17 13.5933 17 11.3833C17 9.1733 15.21 7.3833 13 7.3833ZM10.5 11.3833C10.5 10.0033 11.62 8.8833 13 8.8833C13.42 8.8833 13.8 8.9933 14.15 9.1733L10.79 12.5333C10.61 12.1833 10.5 11.8033 10.5 11.3833ZM13 13.8833C12.58 13.8833 12.2 13.7733 11.85 13.5933L15.21 10.2333C15.39 10.5833 15.5 10.9633 15.5 11.3833C15.5 12.7633 14.38 13.8833 13 13.8833Z" fill={colorCode} />
      <path d="M12 17.3833H2V5.3833H12V6.3833H14V5.3833V4.3833V2.3833C14 1.2833 13.1 0.383301 12 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V20.3833C0 21.4833 0.9 22.3833 2 22.3833H12C13.1 22.3833 14 21.4833 14 20.3833V18.3833V17.3833V16.3833H12V17.3833Z" fill={colorCode} />
    </svg>
  );
}
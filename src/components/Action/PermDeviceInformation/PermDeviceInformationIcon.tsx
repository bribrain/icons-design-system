import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPermDeviceInformationProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PermDeviceInformationIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPermDeviceInformationProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 6.3833H6V8.3833H8V6.3833ZM7 10.3833C6.45 10.3833 6 10.8333 6 11.3833V15.3833C6 15.9333 6.45 16.3833 7 16.3833C7.55 16.3833 8 15.9333 8 15.3833V11.3833C8 10.8333 7.55 10.3833 7 10.3833ZM12 0.393301L2 0.383301C0.9 0.383301 0 1.2833 0 2.3833V20.3833C0 21.4833 0.9 22.3833 2 22.3833H12C13.1 22.3833 14 21.4833 14 20.3833V2.3833C14 1.2833 13.1 0.393301 12 0.393301ZM12 18.3833H2V4.3833H12V18.3833Z" fill={colorCode} />
    </svg>
  );
}
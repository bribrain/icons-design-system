import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAirplayIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AirplayIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAirplayIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.41 19.3833H14.58C15.47 19.3833 15.92 18.3033 15.29 17.6733L11.7 14.0833C11.31 13.6933 10.68 13.6933 10.29 14.0833L6.7 17.6733C6.08 18.3033 6.52 19.3833 7.41 19.3833ZM20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.9 16.3833 2 16.3833H5C5.55 16.3833 6 15.9333 6 15.3833C6 14.8333 5.55 14.3833 5 14.3833H3C2.45 14.3833 2 13.9333 2 13.3833V3.3833C2 2.8333 2.45 2.3833 3 2.3833H19C19.55 2.3833 20 2.8333 20 3.3833V13.3833C20 13.9333 19.55 14.3833 19 14.3833H17C16.45 14.3833 16 14.8333 16 15.3833C16 15.9333 16.45 16.3833 17 16.3833H20C21.1 16.3833 22 15.4833 22 14.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301Z" fill={colorCode} />
    </svg>
  );
}
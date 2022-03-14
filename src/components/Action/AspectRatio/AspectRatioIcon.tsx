import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAspectRatioProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AspectRatioIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAspectRatioProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 9.3833C16.45 9.3833 16 9.8333 16 10.3833V12.3833H14C13.45 12.3833 13 12.8333 13 13.3833C13 13.9333 13.45 14.3833 14 14.3833H17C17.55 14.3833 18 13.9333 18 13.3833V10.3833C18 9.8333 17.55 9.3833 17 9.3833ZM6 6.3833H8C8.55 6.3833 9 5.9333 9 5.3833C9 4.8333 8.55 4.3833 8 4.3833H5C4.45 4.3833 4 4.8333 4 5.3833V8.3833C4 8.9333 4.45 9.3833 5 9.3833C5.55 9.3833 6 8.9333 6 8.3833V6.3833ZM20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H20C21.1 18.3833 22 17.4833 22 16.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM19 16.3933H3C2.45 16.3933 2 15.9433 2 15.3933V3.3733C2 2.8233 2.45 2.3733 3 2.3733H19C19.55 2.3733 20 2.8233 20 3.3733V15.3933C20 15.9433 19.55 16.3933 19 16.3933Z" fill={colorCode} />
    </svg>
  );
}
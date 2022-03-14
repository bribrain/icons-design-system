import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRepeatIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RepeatIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRepeatIconProps) {
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
      <path d="M3.99999 4.38324H14V6.17324C14 6.62324 14.54 6.84324 14.85 6.52324L17.64 3.73324C17.84 3.53324 17.84 3.22324 17.64 3.02324L14.85 0.233241C14.54 -0.0767586 14 0.143242 14 0.593242V2.38324H2.99999C2.44999 2.38324 1.99999 2.83324 1.99999 3.38324V7.38324C1.99999 7.93324 2.44999 8.38324 2.99999 8.38324C3.54999 8.38324 3.99999 7.93324 3.99999 7.38324V4.38324ZM14 14.3832H3.99999V12.5932C3.99999 12.1432 3.45999 11.9232 3.14999 12.2432L0.359991 15.0332C0.159991 15.2332 0.159991 15.5432 0.359991 15.7432L3.14999 18.5332C3.45999 18.8432 3.99999 18.6232 3.99999 18.1732V16.3832H15C15.55 16.3832 16 15.9332 16 15.3832V11.3832C16 10.8332 15.55 10.3832 15 10.3832C14.45 10.3832 14 10.8332 14 11.3832V14.3832Z" fill={colorCode} />
    </svg>
  );
}
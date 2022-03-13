import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITextRotationDownProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TextRotationDownIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITextRotationDownProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.35 16.0333L5.14 14.2433C5.46 13.9233 5.24 13.3833 4.79 13.3833H4V1.3833C4 0.833301 3.55 0.383301 3 0.383301C2.45 0.383301 2 0.833301 2 1.3833V13.3833H1.21C0.76 13.3833 0.54 13.9233 0.86 14.2333L2.65 16.0233C2.84 16.2233 3.16 16.2233 3.35 16.0333ZM9.2 4.8833V9.8833L7.6 10.5433C7.24 10.6933 7 11.0433 7 11.4333C7 12.1233 7.71 12.5833 8.34 12.3133L17.31 8.4333C17.73 8.2533 18 7.8433 18 7.3833C18 6.9233 17.73 6.5133 17.31 6.3333L8.34 2.4533C7.71 2.1833 7 2.6533 7 3.3433C7 3.7333 7.24 4.0833 7.6 4.2333L9.2 4.8833ZM16.02 7.3833L11 9.2533V5.5133L16.02 7.3833Z" fill={colorCode} />
    </svg>
  );
}
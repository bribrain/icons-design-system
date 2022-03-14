import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDoneProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DoneIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDoneProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 10.5832L2.5 7.08325C2.11 6.69325 1.49 6.69325 1.1 7.08325C0.709995 7.47325 0.709995 8.09325 1.1 8.48325L5.29 12.6732C5.68 13.0632 6.31 13.0632 6.7 12.6732L17.3 2.08325C17.69 1.69325 17.69 1.07325 17.3 0.683247C16.91 0.293247 16.29 0.293247 15.9 0.683247L6 10.5832Z" fill={colorCode} />
ss    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IGradeProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function GradeIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IGradeProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.99999 14.6533L15.17 17.7733C15.55 18.0033 16.02 17.6633 15.92 17.2333L14.55 11.3533L19.11 7.40327C19.44 7.11327 19.27 6.56327 18.82 6.52327L12.81 6.01327L10.46 0.473271C10.29 0.0632715 9.70999 0.0632715 9.53999 0.473271L7.18999 6.01327L1.17999 6.52327C0.739995 6.56327 0.559995 7.11327 0.899995 7.40327L5.45999 11.3533L4.08999 17.2333C3.99 17.6633 4.45999 18.0033 4.83999 17.7733L9.99999 14.6533Z" fill={colorCode} />
    </svg>
  );
}
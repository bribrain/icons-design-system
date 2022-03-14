import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISortByAlphaIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SortByAlphaIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISortByAlphaIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.93 1.0333C10.73 0.833301 10.42 0.833301 10.22 1.0333L8.20999 3.0433H12.93L10.93 1.0333ZM10.23 19.7333C10.43 19.9333 10.74 19.9333 10.94 19.7333L12.92 17.7533H8.25999L10.23 19.7333ZM8.97999 16.1133C9.57999 16.1133 9.98999 15.5133 9.76999 14.9533L6.03999 5.4133C5.85999 4.9533 5.40999 4.6533 4.91999 4.6533C4.42999 4.6533 3.97999 4.9533 3.79999 5.4133L0.0599923 14.9433C-0.160008 15.5033 0.249992 16.1033 0.849992 16.1033C1.19999 16.1033 1.51999 15.8833 1.64999 15.5533L2.35999 13.6533H7.46999L8.17999 15.5533C8.30999 15.8933 8.62999 16.1133 8.97999 16.1133ZM2.96999 12.0233L4.90999 6.8433L6.84999 12.0233H2.96999ZM19.05 14.5233H13.72L19.44 6.2333C19.9 5.5733 19.42 4.6633 18.62 4.6633H12.14C11.7 4.6633 11.35 5.0233 11.35 5.4633V5.4733C11.35 5.9133 11.71 6.2733 12.14 6.2733H17.23L11.5 14.5533C11.04 15.2133 11.52 16.1233 12.32 16.1233H19.04C19.48 16.1233 19.83 15.7633 19.83 15.3333C19.85 14.8833 19.49 14.5233 19.05 14.5233Z" fill={colorCode} />
    </svg>
  );
}
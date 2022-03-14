import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILoopIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LoopIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILoopIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 2.38333V0.593331C8 0.143331 7.46 -0.0766687 7.15 0.243331L4.35 3.03333C4.15 3.23333 4.15 3.54333 4.35 3.74333L7.14 6.53333C7.46 6.84333 8 6.62333 8 6.17333V4.38333C11.31 4.38333 14 7.07333 14 10.3833C14 11.1733 13.85 11.9433 13.56 12.6333C13.41 12.9933 13.52 13.4033 13.79 13.6733C14.3 14.1833 15.16 14.0033 15.43 13.3333C15.8 12.4233 16 11.4233 16 10.3833C16 5.96333 12.42 2.38333 8 2.38333ZM8 16.3833C4.69 16.3833 2 13.6933 2 10.3833C2 9.59333 2.15 8.82333 2.44 8.13333C2.59 7.77333 2.48 7.36333 2.21 7.09333C1.7 6.58333 0.84 6.76333 0.57 7.43333C0.2 8.34333 0 9.34333 0 10.3833C0 14.8033 3.58 18.3833 8 18.3833V20.1733C8 20.6233 8.54 20.8433 8.85 20.5233L11.64 17.7333C11.84 17.5333 11.84 17.2233 11.64 17.0233L8.85 14.2333C8.54 13.9233 8 14.1433 8 14.5933V16.3833Z" fill={colorCode} />
    </svg>
  );
}
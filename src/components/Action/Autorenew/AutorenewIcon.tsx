import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAutorenewProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AutorenewIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAutorenewProps) {
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
      <path d="M8 4.38324V6.17324C8 6.62324 8.54 6.84324 8.85 6.52324L11.64 3.73324C11.84 3.53324 11.84 3.22324 11.64 3.02324L8.85 0.233241C8.54 -0.0767586 8 0.143241 8 0.593241V2.38324C3.58 2.38324 0 5.96324 0 10.3832C0 11.4232 0.2 12.4232 0.57 13.3332C0.84 14.0032 1.7 14.1832 2.21 13.6732C2.48 13.4032 2.59 12.9932 2.44 12.6332C2.15 11.9432 2 11.1732 2 10.3832C2 7.07324 4.69 4.38324 8 4.38324ZM13.79 7.09324C13.52 7.36324 13.41 7.78324 13.56 8.13324C13.84 8.83324 14 9.59324 14 10.3832C14 13.6932 11.31 16.3832 8 16.3832V14.5932C8 14.1432 7.46 13.9232 7.15 14.2432L4.36 17.0332C4.16 17.2332 4.16 17.5432 4.36 17.7432L7.15 20.5332C7.46 20.8432 8 20.6232 8 20.1832V18.3832C12.42 18.3832 16 14.8032 16 10.3832C16 9.34324 15.8 8.34324 15.43 7.43324C15.16 6.76324 14.3 6.58324 13.79 7.09324Z" fill={colorCode} />
    </svg>
  );
}
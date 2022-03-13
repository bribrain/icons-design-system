import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFactCheckProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FactCheckIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFactCheckProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H18C19.1 18.3833 20 17.4833 20 16.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301ZM7 14.3833H4C3.45 14.3833 3 13.9333 3 13.3833C3 12.8333 3.45 12.3833 4 12.3833H7C7.55 12.3833 8 12.8333 8 13.3833C8 13.9333 7.55 14.3833 7 14.3833ZM7 10.3833H4C3.45 10.3833 3 9.9333 3 9.3833C3 8.8333 3.45 8.3833 4 8.3833H7C7.55 8.3833 8 8.8333 8 9.3833C8 9.9333 7.55 10.3833 7 10.3833ZM7 6.3833H4C3.45 6.3833 3 5.9333 3 5.3833C3 4.8333 3.45 4.3833 4 4.3833H7C7.55 4.3833 8 4.8333 8 5.3833C8 5.9333 7.55 6.3833 7 6.3833ZM16.7 8.5033L13.53 11.6733C13.14 12.0633 12.5 12.0633 12.11 11.6733L10.7 10.2533C10.31 9.8633 10.31 9.2333 10.7 8.8433C11.09 8.4533 11.72 8.4533 12.11 8.8433L12.82 9.5533L15.29 7.0833C15.68 6.6933 16.31 6.6933 16.7 7.0833L16.71 7.0933C17.09 7.4833 17.09 8.1233 16.7 8.5033Z" fill={colorCode} />
    </svg>
  );
}
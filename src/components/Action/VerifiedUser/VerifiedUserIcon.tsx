import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVerifiedUserProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VerifiedUserIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVerifiedUserProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.19 0.743301L1.19 3.8533C0.47 4.1733 0 4.8933 0 5.6833V10.3833C0 15.9333 3.84 21.1233 9 22.3833C14.16 21.1233 18 15.9333 18 10.3833V5.6833C18 4.8933 17.53 4.1733 16.81 3.8533L9.81 0.743301C9.3 0.513301 8.7 0.513301 8.19 0.743301ZM6.29 15.6733L3.7 13.0833C3.31 12.6933 3.31 12.0633 3.7 11.6733C4.09 11.2833 4.72 11.2833 5.11 11.6733L7 13.5533L12.88 7.6733C13.27 7.2833 13.9 7.2833 14.29 7.6733C14.68 8.0633 14.68 8.6933 14.29 9.0833L7.7 15.6733C7.32 16.0633 6.68 16.0633 6.29 15.6733Z" fill={colorCode} />
    </svg>
  );
}
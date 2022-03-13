import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVerifiedProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VerifiedIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVerifiedProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 11.3833L19.56 8.5933L19.9 4.9033L16.29 4.0833L14.4 0.883301L11 2.3433L7.6 0.883301L5.71 4.0733L2.1 4.8833L2.44 8.5833L0 11.3833L2.44 14.1733L2.1 17.8733L5.71 18.6933L7.6 21.8833L11 20.4133L14.4 21.8733L16.29 18.6833L19.9 17.8633L19.56 14.1733L22 11.3833ZM8.38 15.3933L6 12.9933C5.61 12.6033 5.61 11.9733 6 11.5833L6.07 11.5133C6.46 11.1233 7.1 11.1233 7.49 11.5133L9.1 13.1333L14.25 7.9733C14.64 7.5833 15.28 7.5833 15.67 7.9733L15.74 8.0433C16.13 8.4333 16.13 9.0633 15.74 9.4533L9.82 15.3933C9.41 15.7833 8.78 15.7833 8.38 15.3933Z" fill={colorCode} />
    </svg>
  );
}
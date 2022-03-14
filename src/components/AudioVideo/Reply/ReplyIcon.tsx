import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IReplyIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ReplyIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IReplyIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 3.38333V0.593331C8 0.143331 7.46 -0.0766687 7.15 0.243331L3.35 4.03333C3.15 4.23333 3.15 4.54333 3.35 4.74333L7.14 8.53333C7.46 8.84333 8 8.62333 8 8.17333V5.38333C11.73 5.38333 14.68 8.80333 13.86 12.6733C13.39 14.9433 11.55 16.7733 9.29 17.2433C5.72 17.9933 2.54 15.5433 2.06 12.2333C1.99 11.7533 1.57 11.3833 1.08 11.3833C0.479997 11.3833 -2.5183e-06 11.9133 0.0799975 12.5133C0.699997 16.9033 4.88 20.1533 9.61 19.2333C12.73 18.6233 15.24 16.1133 15.85 12.9933C16.84 7.86333 12.94 3.38333 8 3.38333Z" fill={colorCode} />
    </svg>
  );
}
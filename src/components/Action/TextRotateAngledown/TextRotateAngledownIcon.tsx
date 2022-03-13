import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITextRotateAngledownProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TextRotateAngledownIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITextRotateAngledownProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 16.8833V14.3433C12 13.8933 11.46 13.6733 11.15 13.9933L10.59 14.5533L2.1 6.06333C1.71 5.67333 1.08 5.67333 0.689999 6.06333C0.299999 6.45333 0.299999 7.08333 0.689999 7.47333L9.18 15.9633L8.62 16.5233C8.3 16.8433 8.52 17.3833 8.96 17.3833H11.5C11.78 17.3833 12 17.1533 12 16.8833ZM8.25 4.86333L11.79 8.40333L11.12 10.0033C10.97 10.3633 11.05 10.7733 11.33 11.0533C11.82 11.5433 12.64 11.3733 12.9 10.7333L16.51 1.64333C16.68 1.22333 16.58 0.733331 16.26 0.413331C15.94 0.0933314 15.46 -0.00666887 15.03 0.163331L5.93 3.76333C5.29 4.01333 5.12 4.84333 5.61 5.33333C5.88 5.60333 6.29 5.68333 6.65 5.53333L8.25 4.86333ZM14.84 1.81333L12.61 6.68333L9.97 4.04333L14.84 1.81333Z" fill={colorCode} />
    </svg>
  );
}
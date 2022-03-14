import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITextRotateAngleupProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TextRotateAngleupIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITextRotateAngleupProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.61 6.23328L15.17 6.79328L6.69 15.2833C6.3 15.6733 6.3 16.3033 6.69 16.6933C7.08 17.0833 7.71 17.0833 8.1 16.6933L16.59 8.20328L17.15 8.76328C17.46 9.08328 18 8.86328 18 8.42328V5.88328C18 5.60328 17.78 5.38328 17.5 5.38328H14.96C14.52 5.38328 14.3 5.92328 14.61 6.23328ZM5.48 9.13328L9.02 5.59328L10.62 6.26328C10.98 6.41328 11.39 6.33328 11.67 6.05328C12.16 5.56328 11.99 4.74328 11.35 4.48328L2.26 0.883282C1.83 0.723282 1.35 0.823283 1.03 1.14328C0.71 1.46328 0.61 1.94328 0.78 2.37328L4.39 11.4633C4.64 12.1033 5.47 12.2733 5.96 11.7833C6.24 11.5033 6.32 11.0933 6.17 10.7333L5.48 9.13328ZM4.66 7.41328L2.43 2.54328L7.3 4.77328L4.66 7.41328Z" fill={colorCode} />
    </svg>
  );
}
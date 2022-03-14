import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRadioIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RadioIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRadioIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.24 5.53335C0.51 5.81335 0 6.55335 0 7.38335V19.3834C0 20.4834 0.9 21.3834 2 21.3834H18C19.11 21.3834 20 20.4834 20 19.3834V7.38335C20 6.28335 19.1 5.38335 18 5.38335H6.3L13.73 2.38335C14.19 2.19335 14.41 1.67335 14.22 1.21335C14.03 0.75335 13.51 0.53335 13.05 0.72335L1.24 5.53335ZM5 19.3834C3.34 19.3834 2 18.0434 2 16.3833C2 14.7233 3.34 13.3833 5 13.3833C6.66 13.3833 8 14.7233 8 16.3833C8 18.0434 6.66 19.3834 5 19.3834ZM18 11.3833H16V10.3833C16 9.83335 15.55 9.38335 15 9.38335C14.45 9.38335 14 9.83335 14 10.3833V11.3833H2V8.38335C2 7.83335 2.45 7.38335 3 7.38335H17C17.55 7.38335 18 7.83335 18 8.38335V11.3833Z" fill={colorCode} />
    </svg>
  );
}
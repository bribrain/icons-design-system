import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISpellcheckProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SpellcheckIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISpellcheckProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.12 13.3833C11.81 13.3833 12.27 12.6933 12.02 12.0633L7.77 1.2533C7.56 0.723301 7.06 0.383301 6.5 0.383301C5.94 0.383301 5.44 0.723301 5.23 1.2533L0.979996 12.0633C0.729996 12.6933 1.2 13.3833 1.88 13.3833C2.28 13.3833 2.64 13.1333 2.79 12.7533L3.67 10.3833H9.31L10.21 12.7633C10.36 13.1333 10.72 13.3833 11.12 13.3833ZM4.43 8.3833L6.5 2.8633L8.57 8.3833H4.43ZM18.89 9.6733L11.5 17.0633L8.53 14.0933C8.14 13.7033 7.51 13.7033 7.12 14.0933C6.73 14.4833 6.73 15.1133 7.12 15.5033L10.8 19.1833C11.19 19.5733 11.82 19.5733 12.21 19.1833L20.29 11.0933C20.68 10.7033 20.68 10.0733 20.29 9.6833C19.91 9.2933 19.27 9.2933 18.89 9.6733Z" fill={colorCode} />
    </svg>
  );
}
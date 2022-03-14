import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPowerSettingsNewProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PowerSettingsNewIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPowerSettingsNewProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.99999 0.383301C9.44999 0.383301 8.99999 0.833301 8.99999 1.3833V9.3833C8.99999 9.9333 9.44999 10.3833 9.99999 10.3833C10.55 10.3833 11 9.9333 11 9.3833V1.3833C11 0.833301 10.55 0.383301 9.99999 0.383301ZM15.14 3.2433C14.75 3.6333 14.76 4.2433 15.13 4.6333C16.26 5.8333 16.96 7.4333 17 9.2033C17.09 13.0333 13.92 16.3333 10.09 16.3733C6.17999 16.4333 2.99999 13.2833 2.99999 9.3833C2.99999 7.5433 3.70999 5.8733 4.86999 4.6233C5.23999 4.2333 5.23999 3.6233 4.85999 3.2433C4.45999 2.8433 3.80999 2.8533 3.42999 3.2633C1.97999 4.8033 1.06999 6.8533 0.999992 9.1233C0.859992 14.0033 4.82999 18.2233 9.70999 18.3733C14.81 18.5333 19 14.4433 19 9.3733C19 7.0033 18.08 4.8633 16.58 3.2633C16.2 2.8533 15.54 2.8433 15.14 3.2433V3.2433Z" fill={colorCode} />
    </svg>
  );
}
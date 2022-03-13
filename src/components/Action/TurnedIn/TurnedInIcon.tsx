import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITurnedInProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TurnedInIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITurnedInProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 14 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V18.3833L7 15.3833L14 18.3833V2.3833C14 1.2833 13.1 0.383301 12 0.383301Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPanToolProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PanToolIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPanToolProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 25"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M20.5 4.3833C19.67 4.3833 19 5.0533 19 5.8833V10.8833C19 11.1633 18.78 11.3833 18.5 11.3833C18.22 11.3833 18 11.1633 18 10.8833V2.8833C18 2.0533 17.33 1.3833 16.5 1.3833C15.67 1.3833 15 2.0533 15 2.8833V10.8833C15 11.1633 14.78 11.3833 14.5 11.3833C14.22 11.3833 14 11.1633 14 10.8833V1.8833C14 1.0533 13.33 0.383301 12.5 0.383301C11.67 0.383301 11 1.0533 11 1.8833V10.8733C11 11.1533 10.78 11.3733 10.5 11.3733C10.22 11.3733 10 11.1533 10 10.8733V4.8833C10 4.0533 9.33 3.3833 8.5 3.3833C7.67 3.3833 7 4.0533 7 4.8833V16.2933L2.88 13.9433C2.3 13.6133 1.58 13.7033 1.1 14.1633C0.499997 14.7433 0.479997 15.7033 1.07 16.2933L7.85 23.1833C8.6 23.9533 9.62 24.3833 10.7 24.3833H18C20.21 24.3833 22 22.5933 22 20.3833V5.8833C22 5.0533 21.33 4.3833 20.5 4.3833Z" fill={colorCode} />
    </svg>
  );
}
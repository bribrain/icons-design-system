import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHomeProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HomeIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHomeProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.00001 16.3833V11.3833H12V16.3833C12 16.9333 12.45 17.3833 13 17.3833H16C16.55 17.3833 17 16.9333 17 16.3833V9.38327H18.7C19.16 9.38327 19.38 8.81327 19.03 8.51327L10.67 0.983271C10.29 0.643271 9.71001 0.643271 9.33001 0.983271L0.970007 8.51327C0.630007 8.81327 0.840006 9.38327 1.30001 9.38327H3.00001V16.3833C3.00001 16.9333 3.45001 17.3833 4.00001 17.3833H7.00001C7.55001 17.3833 8.00001 16.9333 8.00001 16.3833Z" fill={colorCode} />
    </svg>
  );
}
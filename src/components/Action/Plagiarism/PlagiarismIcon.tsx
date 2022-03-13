import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPlagiarismProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PlagiarismIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPlagiarismProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.41 5.7933L10.58 0.963301C10.21 0.593301 9.7 0.383301 9.17 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H14C15.1 20.3833 16 19.4833 16 18.3833V7.2133C16 6.6833 15.79 6.1733 15.41 5.7933ZM11.74 17.1233C11.35 17.5133 10.72 17.5133 10.33 17.1233L9.15 15.9433C7.82 16.6533 6.14 16.4733 5.02 15.3533C3.5 13.8333 3.67 11.2733 5.52 9.9833C6.68 9.1733 8.3 9.1733 9.47 9.9833C11.02 11.0633 11.37 13.0233 10.56 14.5333L11.74 15.7133C12.13 16.1033 12.13 16.7333 11.74 17.1233ZM10 7.3833C9.45 7.3833 9 6.9333 9 6.3833V1.8833L14.5 7.3833H10Z" fill={colorCode} />
      <path d="M7.5 14.3833C8.32843 14.3833 9 13.7117 9 12.8833C9 12.0549 8.32843 11.3833 7.5 11.3833C6.67157 11.3833 6 12.0549 6 12.8833C6 13.7117 6.67157 14.3833 7.5 14.3833Z" fill={colorCode} />
    </svg>
  );
}
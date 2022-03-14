import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAddTaskIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddTaskIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAddTaskIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.29 4.27325L10.29 14.2732C9.9 14.6632 9.27 14.6632 8.88 14.2732L6.05 11.4432C5.66 11.0532 5.66 10.4232 6.05 10.0332C6.44 9.64325 7.07 9.64325 7.46 10.0332L9.58 12.1532L18.87 2.86325C19.26 2.47325 19.89 2.47325 20.28 2.86325C20.68 3.25325 20.68 3.88325 20.29 4.27325ZM11 18.3832C6.29 18.3832 2.52 14.2932 3.05 9.48325C3.44 5.96325 6.17 3.07325 9.66 2.49325C11.47 2.19325 13.19 2.51325 14.65 3.27325C15.04 3.47325 15.51 3.40325 15.82 3.09325C16.3 2.61325 16.18 1.80325 15.58 1.49325C14.11 0.743246 12.45 0.333246 10.68 0.383246C5.54 0.543246 1.27 4.72325 1.01 9.85325C0.720001 15.6232 5.3 20.3832 11 20.3832C12.2 20.3832 13.34 20.1732 14.41 19.7832C15.09 19.5332 15.28 18.6532 14.76 18.1332C14.49 17.8632 14.08 17.7632 13.72 17.9032C12.87 18.2132 11.95 18.3832 11 18.3832ZM18 13.3832H16C15.45 13.3832 15 13.8332 15 14.3832C15 14.9332 15.45 15.3832 16 15.3832H18V17.3832C18 17.9332 18.45 18.3832 19 18.3832C19.55 18.3832 20 17.9332 20 17.3832V15.3832H22C22.55 15.3832 23 14.9332 23 14.3832C23 13.8332 22.55 13.3832 22 13.3832H20V11.3832C20 10.8332 19.55 10.3832 19 10.3832C18.45 10.3832 18 10.8332 18 11.3832V13.3832Z" fill={colorCode} />
    </svg>
  );
}
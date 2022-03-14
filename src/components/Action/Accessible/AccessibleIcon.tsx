import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAccessibleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AccessibleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAccessibleIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 5.28334C14 4.79334 13.64 4.39334 13.16 4.31334C11.91 4.10334 10.73 3.43334 9.93 2.55334L8.64 1.12334C8.47 0.933338 8.26 0.783338 8.03 0.673338C8.02 0.673338 8.02 0.663338 8.01 0.663338H8C7.63 0.453338 7.22 0.353338 6.75 0.413338C5.73 0.533338 5 1.45334 5 2.48334V8.38334C5 9.48334 5.9 10.3833 7 10.3833H12V14.3833C12 14.9333 12.45 15.3833 13 15.3833C13.55 15.3833 14 14.9333 14 14.3833V9.88334C14 8.78334 13.1 7.88334 12 7.88334H9V4.43334C10 5.26334 11.4 5.97334 12.8 6.25334C13.42 6.38334 14 5.91334 14 5.28334ZM7.83 11.3833C7.42 12.5433 6.31 13.3833 5 13.3833C3.34 13.3833 2 12.0433 2 10.3833C2 9.07334 2.84 7.97334 4 7.55334V5.48334C1.72 5.94334 0 7.96334 0 10.3833C0 13.1433 2.24 15.3833 5 15.3833C7.42 15.3833 9.44 13.6633 9.9 11.3833H7.83Z" fill={colorCode}/>
    </svg>
  );
}
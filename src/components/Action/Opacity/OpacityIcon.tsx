import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IOpacityProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function OpacityIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IOpacityProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M13.66 5.38326L8.71 0.443257C8.32 0.0532568 7.69 0.0532568 7.3 0.443257L2.34 5.38326C0.78 6.94326 0 9.02326 0 11.0233C0 13.0233 0.78 15.1333 2.34 16.6933C3.9 18.2533 5.95 19.0433 8 19.0433C10.05 19.0433 12.1 18.2533 13.66 16.6933C15.22 15.1333 16 13.0233 16 11.0233C16 9.02326 15.22 6.94326 13.66 5.38326ZM2 11.3833C2.01 9.38326 2.62 8.11326 3.76 6.98326L8 2.65326L12.24 7.03326C13.38 8.15326 13.99 9.38326 14 11.3833H2Z" fill={colorCode} />
    </svg>
  );
}
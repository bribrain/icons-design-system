import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVolumeUpIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VolumeUpIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVolumeUpIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 7.38326V11.3833C0 11.9333 0.45 12.3833 1 12.3833H4L7.29 15.6733C7.92 16.3033 9 15.8533 9 14.9633V3.79326C9 2.90326 7.92 2.45326 7.29 3.08326L4 6.38326H1C0.45 6.38326 0 6.83326 0 7.38326ZM13.5 9.38326C13.5 7.61326 12.48 6.09326 11 5.35326V13.4033C12.48 12.6733 13.5 11.1533 13.5 9.38326ZM11 1.83326V2.03326C11 2.41326 11.25 2.74326 11.6 2.88326C14.18 3.91326 16 6.44326 16 9.38326C16 12.3233 14.18 14.8533 11.6 15.8833C11.24 16.0233 11 16.3533 11 16.7333V16.9333C11 17.5633 11.63 18.0033 12.21 17.7833C15.6 16.4933 18 13.2233 18 9.38326C18 5.54326 15.6 2.27326 12.21 0.983264C11.63 0.753264 11 1.20326 11 1.83326V1.83326Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IBackupProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BackupIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IBackupProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.35 6.4233C18.67 2.9733 15.64 0.383301 12 0.383301C9.11 0.383301 6.6 2.0233 5.35 4.4233C2.34 4.7433 0 7.2933 0 10.3833C0 13.6933 2.69 16.3833 6 16.3833H19C21.76 16.3833 24 14.1433 24 11.3833C24 8.7433 21.95 6.6033 19.35 6.4233ZM14 9.3833V13.3833H10V9.3833H7L11.65 4.7333C11.85 4.5333 12.16 4.5333 12.36 4.7333L17 9.3833H14Z" fill={colorCode} />
    </svg>
  );
}
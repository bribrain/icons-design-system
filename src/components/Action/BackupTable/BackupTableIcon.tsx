import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IBackupTableProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BackupTableIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IBackupTableProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 5.3833V17.3833C18 17.9333 17.55 18.3833 17 18.3833H5C4.45 18.3833 4 18.8333 4 19.3833C4 19.9333 4.45 20.3833 5 20.3833H18C19.1 20.3833 20 19.4833 20 18.3833V5.3833C20 4.8333 19.55 4.3833 19 4.3833C18.45 4.3833 18 4.8333 18 5.3833Z" fill={colorCode} />
      <path d="M14 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.9 16.3833 2 16.3833H14C15.1 16.3833 16 15.4833 16 14.3833V2.3833C16 1.2833 15.1 0.383301 14 0.383301ZM7 14.3833H2V9.3833H7V14.3833ZM14 14.3833H9V9.3833H14V14.3833ZM14 7.3833H2V2.3833H14V7.3833Z" fill={colorCode} />
    </svg>
  );
}
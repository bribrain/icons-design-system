import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRestoreFromTrashProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RestoreFromTrashIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRestoreFromTrashProps) {
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
      <path d="M1 16.3833C1 17.4833 1.9 18.3833 3 18.3833H11C12.1 18.3833 13 17.4833 13 16.3833V6.3833C13 5.2833 12.1 4.3833 11 4.3833H3C1.9 4.3833 1 5.2833 1 6.3833V16.3833ZM6.65 7.7333C6.85 7.5333 7.16 7.5333 7.36 7.7333L11 11.3833H9V15.3833H5V11.3833H3L6.65 7.7333ZM10.5 1.3833L9.79 0.673301C9.61 0.493301 9.35 0.383301 9.09 0.383301H4.91C4.65 0.383301 4.39 0.493301 4.21 0.673301L3.5 1.3833H1C0.45 1.3833 0 1.8333 0 2.3833C0 2.9333 0.45 3.3833 1 3.3833H13C13.55 3.3833 14 2.9333 14 2.3833C14 1.8333 13.55 1.3833 13 1.3833H10.5Z" fill={colorCode} />
    </svg>
  );
}
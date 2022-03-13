import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISubjectProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SubjectIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISubjectProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 12.3833H1C0.45 12.3833 0 12.8333 0 13.3833C0 13.9333 0.45 14.3833 1 14.3833H9C9.55 14.3833 10 13.9333 10 13.3833C10 12.8333 9.55 12.3833 9 12.3833ZM15 4.3833H1C0.45 4.3833 0 4.8333 0 5.3833C0 5.9333 0.45 6.3833 1 6.3833H15C15.55 6.3833 16 5.9333 16 5.3833C16 4.8333 15.55 4.3833 15 4.3833ZM1 10.3833H15C15.55 10.3833 16 9.9333 16 9.3833C16 8.8333 15.55 8.3833 15 8.3833H1C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833ZM0 1.3833C0 1.9333 0.45 2.3833 1 2.3833H15C15.55 2.3833 16 1.9333 16 1.3833C16 0.833301 15.55 0.383301 15 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833Z" fill={colorCode} />
    </svg>
  );
}
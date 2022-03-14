import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAssessmentProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AssessmentIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAssessmentProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM5 14.3833C4.45 14.3833 4 13.9333 4 13.3833V8.3833C4 7.8333 4.45 7.3833 5 7.3833C5.55 7.3833 6 7.8333 6 8.3833V13.3833C6 13.9333 5.55 14.3833 5 14.3833ZM9 14.3833C8.45 14.3833 8 13.9333 8 13.3833V5.3833C8 4.8333 8.45 4.3833 9 4.3833C9.55 4.3833 10 4.8333 10 5.3833V13.3833C10 13.9333 9.55 14.3833 9 14.3833ZM13 14.3833C12.45 14.3833 12 13.9333 12 13.3833V11.3833C12 10.8333 12.45 10.3833 13 10.3833C13.55 10.3833 14 10.8333 14 11.3833V13.3833C14 13.9333 13.55 14.3833 13 14.3833Z" fill={colorCode} />
    </svg>
  );
}
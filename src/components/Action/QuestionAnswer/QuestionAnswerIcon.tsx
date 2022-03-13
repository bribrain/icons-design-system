import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IQuestionAnswerProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function QuestionAnswerIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IQuestionAnswerProps) {
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
      <path d="M18 4.3833H17V12.3833C17 12.9333 16.55 13.3833 16 13.3833H4V14.3833C4 15.4833 4.9 16.3833 6 16.3833H16L20 20.3833V6.3833C20 5.2833 19.1 4.3833 18 4.3833ZM15 9.3833V2.3833C15 1.2833 14.1 0.383301 13 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V15.3833L4 11.3833H13C14.1 11.3833 15 10.4833 15 9.3833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDynamicFormProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DynamicFormIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDynamicFormProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.68 6.0933L15.96 14.2833C15.73 14.7733 15 14.6133 15 14.0733V7.3833H13.5C13.22 7.3833 13 7.1633 13 6.8833V0.883301C13 0.603301 13.22 0.383301 13.5 0.383301H19.26C19.61 0.383301 19.86 0.743301 19.72 1.0733L18 5.3833H19.22C19.59 5.3833 19.83 5.7633 19.68 6.0933ZM13 9.3833V16.3833H2C0.9 16.3833 0 15.4833 0 14.3833V11.3833C0 10.2833 0.9 9.3833 2 9.3833H13ZM4.25 12.8833C4.25 12.4733 3.91 12.1333 3.5 12.1333C3.09 12.1333 2.75 12.4733 2.75 12.8833C2.75 13.2933 3.09 13.6333 3.5 13.6333C3.91 13.6333 4.25 13.2933 4.25 12.8833ZM11 0.383301V7.3833H2C0.9 7.3833 0 6.4833 0 5.3833V2.3833C0 1.2833 0.9 0.383301 2 0.383301H11ZM4.25 3.8833C4.25 3.4733 3.91 3.1333 3.5 3.1333C3.09 3.1333 2.75 3.4733 2.75 3.8833C2.75 4.2933 3.09 4.6333 3.5 4.6333C3.91 4.6333 4.25 4.2933 4.25 3.8833Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IViewAgendaProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewAgendaIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IViewAgendaProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 10.3833H1C0.45 10.3833 0 10.8333 0 11.3833V17.3833C0 17.9333 0.45 18.3833 1 18.3833H18C18.55 18.3833 19 17.9333 19 17.3833V11.3833C19 10.8333 18.55 10.3833 18 10.3833ZM18 0.383301H1C0.45 0.383301 0 0.833301 0 1.3833V7.3833C0 7.9333 0.45 8.3833 1 8.3833H18C18.55 8.3833 19 7.9333 19 7.3833V1.3833C19 0.833301 18.55 0.383301 18 0.383301Z" fill={colorCode} />
    </svg>
  );
}
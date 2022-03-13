import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICardTravelProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CardTravelIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICardTravelProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 4.3833H15V2.3833C15 1.2733 14.11 0.383301 13 0.383301H7C5.89 0.383301 5 1.2733 5 2.3833V4.3833H2C0.89 4.3833 0 5.2733 0 6.3833V17.3833C0 18.4933 0.89 19.3833 2 19.3833H18C19.11 19.3833 20 18.4933 20 17.3833V6.3833C20 5.2733 19.11 4.3833 18 4.3833ZM7 2.3833H13V4.3833H7V2.3833ZM18 17.3833H2V15.3833H18V17.3833ZM18 12.3833H2V7.3833C2 6.8333 2.45 6.3833 3 6.3833H5V7.3833C5 7.9333 5.45 8.3833 6 8.3833C6.55 8.3833 7 7.9333 7 7.3833V6.3833H13V7.3833C13 7.9333 13.45 8.3833 14 8.3833C14.55 8.3833 15 7.9333 15 7.3833V6.3833H17C17.55 6.3833 18 6.8333 18 7.3833V12.3833Z" fill={colorCode} />
    </svg>
  );
}
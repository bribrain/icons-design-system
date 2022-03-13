import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICardMembershipProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CardMembershipIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICardMembershipProps) {
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
      <path d="M18 0.383301H2C0.89 0.383301 0 1.2733 0 2.3833V13.3833C0 14.4933 0.89 15.3833 2 15.3833H6V20.3833L10 18.3833L14 20.3833V15.3833H18C19.11 15.3833 20 14.4933 20 13.3833V2.3833C20 1.2733 19.11 0.383301 18 0.383301ZM18 13.3833H2V11.3833H18V13.3833ZM18 8.3833H2V3.3833C2 2.8333 2.45 2.3833 3 2.3833H17C17.55 2.3833 18 2.8333 18 3.3833V8.3833Z" fill={colorCode} />
    </svg>
  );
}
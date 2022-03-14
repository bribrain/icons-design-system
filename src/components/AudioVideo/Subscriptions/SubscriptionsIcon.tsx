import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISubscriptionsIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SubscriptionsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISubscriptionsIconProps) {
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
      <path d="M17 6.3833H3C2.45 6.3833 2 5.9333 2 5.3833C2 4.8333 2.45 4.3833 3 4.3833H17C17.55 4.3833 18 4.8333 18 5.3833C18 5.9333 17.55 6.3833 17 6.3833ZM15 0.383301H5C4.45 0.383301 4 0.833301 4 1.3833C4 1.9333 4.45 2.3833 5 2.3833H15C15.55 2.3833 16 1.9333 16 1.3833C16 0.833301 15.55 0.383301 15 0.383301ZM20 10.3833V18.3833C20 19.4833 19.1 20.3833 18 20.3833H2C0.9 20.3833 0 19.4833 0 18.3833V10.3833C0 9.2833 0.9 8.3833 2 8.3833H18C19.1 8.3833 20 9.2833 20 10.3833ZM13.19 13.9433L8 11.1133V17.6433L13.19 14.8233C13.54 14.6333 13.54 14.1333 13.19 13.9433Z" fill={colorCode} />
    </svg>
  );
}
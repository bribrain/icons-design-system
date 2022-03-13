import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAllInboxIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AllInboxIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAllInboxIconProps) {
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
      <path d="M16 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V9.3833C0 10.4833 0.9 11.3833 2 11.3833H16C17.1 11.3833 18 10.4833 18 9.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301ZM16 6.3833H12.86C12.39 6.3833 12.02 6.7133 11.89 7.1633C11.53 8.4233 10.35 9.3833 9 9.3833C7.65 9.3833 6.47 8.4233 6.11 7.1633C5.98 6.7133 5.61 6.3833 5.14 6.3833H2V3.3833C2 2.8333 2.45 2.3833 3 2.3833H15C15.55 2.3833 16 2.8333 16 3.3833V6.3833ZM12.87 13.3833H17C17.55 13.3833 18 13.8333 18 14.3833V16.3833C18 17.4833 17.1 18.3833 16 18.3833H2C0.9 18.3833 0 17.4833 0 16.3833V14.3833C0 13.8333 0.45 13.3833 1 13.3833H5.13C5.6 13.3833 5.98 13.7233 6.11 14.1833C6.46 15.4533 7.62 16.3833 9 16.3833C10.38 16.3833 11.54 15.4533 11.89 14.1833C12.02 13.7233 12.4 13.3833 12.87 13.3833Z" fill={colorCode} />
    </svg>
  );
}
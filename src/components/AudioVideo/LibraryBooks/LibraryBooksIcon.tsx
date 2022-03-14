import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILibraryBooksIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LibraryBooksIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILibraryBooksIconProps) {
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
      <path d="M1 4.3833C0.45 4.3833 0 4.8333 0 5.3833V18.3833C0 19.4833 0.9 20.3833 2 20.3833H15C15.55 20.3833 16 19.9333 16 19.3833C16 18.8333 15.55 18.3833 15 18.3833H3C2.45 18.3833 2 17.9333 2 17.3833V5.3833C2 4.8333 1.55 4.3833 1 4.3833ZM18 0.383301H6C4.9 0.383301 4 1.2833 4 2.3833V14.3833C4 15.4833 4.9 16.3833 6 16.3833H18C19.1 16.3833 20 15.4833 20 14.3833V2.3833C20 1.2833 19.1 0.383301 18 0.383301ZM16 9.3833H8C7.45 9.3833 7 8.9333 7 8.3833C7 7.8333 7.45 7.3833 8 7.3833H16C16.55 7.3833 17 7.8333 17 8.3833C17 8.9333 16.55 9.3833 16 9.3833ZM12 13.3833H8C7.45 13.3833 7 12.9333 7 12.3833C7 11.8333 7.45 11.3833 8 11.3833H12C12.55 11.3833 13 11.8333 13 12.3833C13 12.9333 12.55 13.3833 12 13.3833ZM16 5.3833H8C7.45 5.3833 7 4.9333 7 4.3833C7 3.8333 7.45 3.3833 8 3.3833H16C16.55 3.3833 17 3.8333 17 4.3833C17 4.9333 16.55 5.3833 16 5.3833Z" fill={colorCode} />
    </svg>
  );
}
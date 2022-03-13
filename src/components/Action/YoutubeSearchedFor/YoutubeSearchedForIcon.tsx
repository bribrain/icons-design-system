import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IYoutubeSearchedForProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function YoutubeSearchedForIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IYoutubeSearchedForProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.01 11.3833H15.21L14.94 11.1133C16.09 9.7733 16.7 7.9733 16.45 6.0233C16.11 3.3833 14.1 1.1633 11.5 0.563301C7.26001 -0.416699 3.51001 2.9133 3.51001 6.8833H1.41001C0.940006 6.8833 0.730006 7.4733 1.10001 7.7733L4.50001 10.5233C4.69001 10.7233 5.01001 10.7333 5.21001 10.5333L8.11001 7.7433C8.43001 7.4333 8.21001 6.8833 7.76001 6.8833H5.51001C5.51001 4.3933 7.51001 2.4033 9.97001 2.3833C12.41 2.3633 14.51 4.4333 14.51 6.8733C14.51 9.3533 12.49 11.3833 10.01 11.3833C9.56001 11.3833 9.12001 11.3133 8.71001 11.1933C8.37001 11.0933 8.00001 11.1933 7.75001 11.4533C7.22001 11.9833 7.43001 12.9033 8.14001 13.1133C8.73001 13.2833 9.36001 13.3833 10.01 13.3833C11.62 13.3833 13.09 12.7933 14.23 11.8133L14.5 12.0833V12.8733L18.77 17.1233C19.18 17.5333 19.84 17.5333 20.25 17.1233C20.66 16.7133 20.66 16.0433 20.25 15.6333L16.01 11.3833Z" fill={colorCode} />
    </svg>
  );
}
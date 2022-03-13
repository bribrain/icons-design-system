import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IImageSearchIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ImageSearchIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IImageSearchIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      style={{
        transform: `rotate(${rotate}deg)`,
        WebkitTransform: `rotate(${rotate}deg)`,
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15.3832V19.3832C18 19.9332 17.55 20.3832 17 20.3832H5C4.45 20.3832 4 19.9332 4 19.3832V7.38318C4 6.83318 4.45 6.38318 5 6.38318H8.02C8.57 6.38318 9.02 5.93318 9.02 5.38318C9.02 4.83318 8.57 4.38318 8.02 4.38318H4C2.9 4.38318 2 5.28318 2 6.38318V20.3832C2 21.4832 2.9 22.3832 4 22.3832H18C19.1 22.3832 20 21.4832 20 20.3832V15.3832C20 14.8332 19.55 14.3832 19 14.3832C18.45 14.3832 18 14.8332 18 15.3832ZM15.5 18.3832H6.52C6.1 18.3832 5.87 17.9032 6.13 17.5732L7.87 15.3432C8.07 15.0932 8.45 15.0832 8.65 15.3332L10.21 17.2132L12.56 14.1932C12.76 13.9332 13.16 13.9332 13.35 14.2032L15.9 17.5932C16.15 17.9132 15.91 18.3832 15.5 18.3832ZM19.3 9.27318C19.78 8.50318 20.05 7.60318 19.99 6.61318C19.86 4.46318 18.15 2.64318 16.02 2.41318C13.3 2.11318 11 4.22318 11 6.88318C11 9.37318 13.01 11.3832 15.49 11.3832C16.37 11.3832 17.19 11.1232 17.88 10.6832L20.29 13.0932C20.68 13.4832 21.32 13.4832 21.71 13.0932C22.1 12.7032 22.1 12.0632 21.71 11.6732L19.3 9.27318ZM15.5 9.38318C14.12 9.38318 13 8.26318 13 6.88318C13 5.50318 14.12 4.38318 15.5 4.38318C16.88 4.38318 18 5.50318 18 6.88318C18 8.26318 16.88 9.38318 15.5 9.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}

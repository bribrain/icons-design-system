import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IdWbIridescentIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function dWbIridescentIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IdWbIridescentIconProps) {
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
        d="M6.00003 15.3832H18C18.55 15.3832 19 14.9332 19 14.3832V10.4332C19 9.88318 18.55 9.43318 18 9.43318H6.00003C5.45003 9.43318 5.00003 9.88318 5.00003 10.4332V14.3832C5.00003 14.9332 5.45003 15.3832 6.00003 15.3832ZM11 2.38318V3.43318C11 3.98318 11.45 4.38318 12 4.38318C12.55 4.38318 13 3.98318 13 3.43318V2.38318C13 1.83318 12.55 1.38318 12 1.38318C11.45 1.38318 11 1.83318 11 2.38318ZM18.34 4.68318L17.96 5.06318C17.57 5.45318 17.57 6.08318 17.96 6.47318C18.35 6.86318 18.98 6.86318 19.37 6.47318L19.75 6.09318C20.14 5.70318 20.14 5.07318 19.75 4.68318C19.36 4.29318 18.73 4.29318 18.34 4.68318ZM13 22.3832V21.4232C13 20.8732 12.55 20.4232 12 20.4232C11.45 20.4232 11 20.8732 11 21.4232V22.3832C11 22.9332 11.45 23.3832 12 23.3832C12.55 23.3832 13 22.9332 13 22.3832ZM19.74 18.7732L19.35 18.3832C18.96 17.9932 18.33 17.9932 17.94 18.3832C17.55 18.7732 17.55 19.4032 17.94 19.7932L18.32 20.1832C18.71 20.5732 19.34 20.5732 19.73 20.1832L19.74 20.1732C20.13 19.7932 20.13 19.1532 19.74 18.7732ZM4.25003 6.09318L4.64003 6.48318C5.03003 6.87318 5.66003 6.87318 6.05003 6.48318C6.44003 6.09318 6.44003 5.46318 6.05003 5.07318L5.66003 4.68318C5.27003 4.29318 4.64003 4.29318 4.25003 4.68318C3.87003 5.07318 3.87003 5.71318 4.25003 6.09318ZM5.67003 20.1732L6.05003 19.7932C6.44003 19.4032 6.44003 18.7732 6.05003 18.3832C5.66003 17.9932 5.03003 17.9932 4.64003 18.3832L4.26003 18.7632C3.87003 19.1532 3.87003 19.7832 4.26003 20.1732C4.64003 20.5632 5.28003 20.5632 5.67003 20.1732Z"
        fill={colorCode}
      />
    </svg>
  );
}

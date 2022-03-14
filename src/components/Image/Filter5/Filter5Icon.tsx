import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFilter5IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Filter5Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFilter5IconProps) {
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
        d="M21 1.38318H7C5.9 1.38318 5 2.28318 5 3.38318V17.3832C5 18.4832 5.9 19.3832 7 19.3832H21C22.1 19.3832 23 18.4832 23 17.3832V3.38318C23 2.28318 22.1 1.38318 21 1.38318ZM20 17.3832H8C7.45 17.3832 7 16.9332 7 16.3832V4.38318C7 3.83318 7.45 3.38318 8 3.38318H20C20.55 3.38318 21 3.83318 21 4.38318V16.3832C21 16.9332 20.55 17.3832 20 17.3832ZM2 5.38318C1.45 5.38318 1 5.83318 1 6.38318V21.3832C1 22.4832 1.9 23.3832 3 23.3832H18C18.55 23.3832 19 22.9332 19 22.3832C19 21.8332 18.55 21.3832 18 21.3832H4C3.45 21.3832 3 20.9332 3 20.3832V6.38318C3 5.83318 2.55 5.38318 2 5.38318ZM17 13.3832V11.3832C17 10.2832 16.1 9.38318 15 9.38318H13V7.38318H16C16.55 7.38318 17 6.93318 17 6.38318C17 5.83318 16.55 5.38318 16 5.38318H12C11.45 5.38318 11 5.83318 11 6.38318V10.3832C11 10.9332 11.45 11.3832 12 11.3832H15V13.3832H12C11.45 13.3832 11 13.8332 11 14.3832C11 14.9332 11.45 15.3832 12 15.3832H15C16.1 15.3832 17 14.4832 17 13.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
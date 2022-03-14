import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFlareIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlareIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFlareIconProps) {
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
        d="M6 11.3832H2C1.45 11.3832 1 11.8332 1 12.3832C1 12.9332 1.45 13.3832 2 13.3832H6C6.55 13.3832 7 12.9332 7 12.3832C7 11.8332 6.55 11.3832 6 11.3832ZM8.47 7.44318L7.75 6.72318C7.36 6.33318 6.73 6.33318 6.34 6.72318C5.95 7.11318 5.95 7.74318 6.34 8.13318L7.05 8.84318C7.44 9.23318 8.07 9.23318 8.46 8.84318C8.85 8.46318 8.85 7.82318 8.47 7.44318ZM12 1.38318C11.44 1.38318 11 1.83318 11 2.38318V6.38318C11 6.93318 11.45 7.38318 12 7.38318C12.55 7.38318 13 6.93318 13 6.38318V2.38318C13 1.83318 12.55 1.38318 12 1.38318ZM17.66 6.73318C17.27 6.34318 16.64 6.34318 16.25 6.73318L15.54 7.44318C15.15 7.83318 15.15 8.46318 15.54 8.85318C15.93 9.24318 16.56 9.24318 16.95 8.85318L17.66 8.14318C18.04 7.75318 18.04 7.11318 17.66 6.73318ZM17 12.3832C17 12.9432 17.45 13.3832 18 13.3832H22C22.55 13.3832 23 12.9332 23 12.3832C23 11.8332 22.55 11.3832 22 11.3832H18C17.45 11.3832 17 11.8332 17 12.3832ZM12 9.38318C10.34 9.38318 9 10.7232 9 12.3832C9 14.0432 10.34 15.3832 12 15.3832C13.66 15.3832 15 14.0432 15 12.3832C15 10.7232 13.66 9.38318 12 9.38318ZM15.53 17.3232L16.24 18.0332C16.63 18.4232 17.26 18.4232 17.65 18.0332C18.04 17.6432 18.04 17.0132 17.65 16.6232L16.94 15.9132C16.55 15.5232 15.92 15.5232 15.53 15.9132C15.15 16.3032 15.15 16.9432 15.53 17.3232ZM6.34 18.0332C6.73 18.4232 7.36 18.4232 7.75 18.0332L8.46 17.3232C8.85 16.9332 8.85 16.3032 8.46 15.9132C8.07 15.5232 7.44 15.5232 7.05 15.9132L6.34 16.6232C5.96 17.0132 5.96 17.6532 6.34 18.0332ZM12 23.3832C12.56 23.3832 13 22.9332 13 22.3832V18.3832C13 17.8332 12.55 17.3832 12 17.3832C11.45 17.3832 11 17.8332 11 18.3832V22.3832C11 22.9332 11.45 23.3832 12 23.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
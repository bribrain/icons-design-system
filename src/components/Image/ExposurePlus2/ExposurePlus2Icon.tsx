import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IExposurePlus2IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ExposurePlus2Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IExposurePlus2IconProps) {
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
        d="M16.05 16.6732L18.91 13.6032C19.29 13.2132 19.63 12.8132 19.95 12.4232C20.27 12.0332 20.54 11.6432 20.77 11.2532C21 10.8632 21.18 10.4732 21.31 10.0832C21.44 9.69318 21.5 9.29318 21.5 8.90318C21.5 8.37318 21.41 7.88318 21.23 7.44318C21.05 7.00318 20.79 6.63318 20.45 6.33318C20.11 6.02318 19.68 5.79318 19.19 5.62318C18.68 5.46318 18.11 5.38318 17.47 5.38318C16.78 5.38318 16.16 5.49318 15.62 5.70318C15.08 5.91318 14.62 6.21318 14.26 6.58318C13.89 6.95318 13.61 7.38318 13.42 7.88318C13.24 8.35318 13.15 8.85318 13.14 9.38318H15.28C15.29 9.07318 15.33 8.78318 15.41 8.51318C15.5 8.22318 15.64 7.97318 15.81 7.76318C15.99 7.55318 16.22 7.39318 16.49 7.27318C16.76 7.15318 17.09 7.09318 17.45 7.09318C17.76 7.09318 18.03 7.14318 18.26 7.24318C18.49 7.34318 18.69 7.49318 18.85 7.67318C19.01 7.85318 19.13 8.07318 19.22 8.32318C19.3 8.57318 19.35 8.84318 19.35 9.13318C19.35 9.35318 19.32 9.56318 19.27 9.78318C19.21 10.0032 19.12 10.2332 18.98 10.4832C18.84 10.7332 18.66 11.0132 18.42 11.3132C18.19 11.6132 17.9 11.9632 17.54 12.3432L13.37 16.8932V18.3832H22V16.6732H16.05ZM7 7.38318C6.45 7.38318 6 7.83318 6 8.38318V11.3832H3C2.45 11.3832 2 11.8332 2 12.3832C2 12.9332 2.45 13.3832 3 13.3832H6V16.3832C6 16.9332 6.45 17.3832 7 17.3832C7.55 17.3832 8 16.9332 8 16.3832V13.3832H11C11.55 13.3832 12 12.9332 12 12.3832C12 11.8332 11.55 11.3832 11 11.3832H8V8.38318C8 7.83318 7.55 7.38318 7 7.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
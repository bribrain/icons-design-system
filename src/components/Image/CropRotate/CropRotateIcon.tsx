import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICropRotateIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CropRotateIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICropRotateIconProps) {
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
      <g clip-path="url(#clip0_73_4270)">
        <path
          d="M16 9.38319V14.3832H18V8.38319C18 7.28319 17.1 6.38319 16 6.38319H10V8.38319H15C15.55 8.38319 16 8.83319 16 9.38319ZM19 16.3832H9.00003C8.45003 16.3832 8.00003 15.9332 8.00003 15.3832V5.38319C8.00003 4.83319 7.55003 4.38319 7.00003 4.38319C6.45003 4.38319 6.00003 4.83319 6.00003 5.38319V6.38319H5.00003C4.45003 6.38319 4.00003 6.83319 4.00003 7.38319C4.00003 7.93319 4.45003 8.38319 5.00003 8.38319H6.00003V16.3832C6.00003 17.4832 6.90003 18.3832 8.00003 18.3832H16V19.3832C16 19.9332 16.45 20.3832 17 20.3832C17.55 20.3832 18 19.9332 18 19.3832V18.3832H19C19.55 18.3832 20 17.9332 20 17.3832C20 16.8332 19.55 16.3832 19 16.3832ZM17.66 1.78319C15.99 0.893188 13.83 0.273188 11.39 0.423188L15.2 4.23319L16.53 2.90319C19.62 4.36319 21.87 7.27319 22.42 10.7632C22.48 11.1732 22.86 11.4532 23.28 11.3832C23.69 11.3232 23.97 10.9332 23.9 10.5232C23.3 6.72319 20.94 3.52319 17.66 1.78319V1.78319ZM7.47003 21.8732C4.38003 20.4132 2.13003 17.5032 1.58003 14.0132C1.52003 13.6032 1.14003 13.3232 0.720026 13.3932C0.310026 13.4532 0.0300255 13.8432 0.100026 14.2532C0.700026 18.0632 3.06003 21.2632 6.34003 23.0032C8.01003 23.8932 10.17 24.5132 12.61 24.3632L8.80003 20.5432L7.47003 21.8732V21.8732Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_4270">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.383179)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
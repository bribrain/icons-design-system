import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPictureInPictureAltProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PictureInPictureAltIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPictureInPictureAltProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 8.3833H11C10.45 8.3833 10 8.8333 10 9.3833V13.3833C10 13.9333 10.45 14.3833 11 14.3833H17C17.55 14.3833 18 13.9333 18 13.3833V9.3833C18 8.8333 17.55 8.3833 17 8.3833ZM22 16.3833V2.3633C22 1.2633 21.1 0.383301 20 0.383301H2C0.9 0.383301 0 1.2633 0 2.3633V16.3833C0 17.4833 0.9 18.3833 2 18.3833H20C21.1 18.3833 22 17.4833 22 16.3833ZM19 16.4033H3C2.45 16.4033 2 15.9533 2 15.4033V3.3533C2 2.8033 2.45 2.3533 3 2.3533H19C19.55 2.3533 20 2.8033 20 3.3533V15.4033C20 15.9533 19.55 16.4033 19 16.4033Z" fill={colorCode} />
    </svg>
  );
}
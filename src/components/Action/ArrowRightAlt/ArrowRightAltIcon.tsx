import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IArrowRightAltProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ArrowRightAltIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IArrowRightAltProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.01 2.38326H1C0.45 2.38326 0 2.83326 0 3.38326C0 3.93326 0.45 4.38326 1 4.38326H12.01V6.17326C12.01 6.62326 12.55 6.84326 12.86 6.52326L15.64 3.73326C15.83 3.53326 15.83 3.22326 15.64 3.02326L12.86 0.233257C12.55 -0.0867429 12.01 0.143256 12.01 0.583256V2.38326Z" fill={colorCode} />
    </svg>
  );
}
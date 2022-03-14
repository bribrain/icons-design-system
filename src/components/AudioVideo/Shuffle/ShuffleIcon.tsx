import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IShuffleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ShuffleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IShuffleIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.58997 5.5533L2.11997 1.0833C1.72997 0.693301 1.09997 0.693301 0.709971 1.0833C0.319971 1.4733 0.319971 2.1033 0.709971 2.4933L5.16997 6.9533L6.58997 5.5533ZM11.35 1.2333L12.54 2.4233L0.699971 14.2633C0.309971 14.6533 0.309971 15.2833 0.699971 15.6733C1.08997 16.0633 1.71997 16.0633 2.10997 15.6733L13.96 3.8433L15.15 5.0333C15.46 5.3433 16 5.1233 16 4.6733V0.883301C16 0.603301 15.78 0.383301 15.5 0.383301H11.71C11.26 0.383301 11.04 0.923301 11.35 1.2333ZM10.83 9.7933L9.41997 11.2033L12.55 14.3333L11.35 15.5333C11.04 15.8433 11.26 16.3833 11.71 16.3833H15.5C15.78 16.3833 16 16.1633 16 15.8833V12.0933C16 11.6433 15.46 11.4233 15.15 11.7433L13.96 12.9333L10.83 9.7933Z" fill={colorCode} />
    </svg>
  );
}
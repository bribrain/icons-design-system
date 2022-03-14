import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsEthernetProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsEthernetIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsEthernetProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.99999 0.503302C5.56999 0.153302 4.93999 0.203302 4.58999 0.633302L0.349993 5.7433C0.0399927 6.1133 0.0399927 6.6533 0.349993 7.0233L4.58999 12.1333C4.93999 12.5633 5.56999 12.6133 5.99999 12.2633C6.42999 11.9133 6.47999 11.2833 6.12999 10.8533L2.41999 6.3833L6.12999 1.9133C6.47999 1.4833 6.42999 0.853302 5.99999 0.503302ZM5.99999 7.3833H7.99999V5.3833H5.99999V7.3833ZM16 5.3833H14V7.3833H16V5.3833ZM9.99999 7.3833H12V5.3833H9.99999V7.3833ZM16 0.503302C15.57 0.853302 15.52 1.4833 15.87 1.9133L19.58 6.3833L15.87 10.8533C15.52 11.2833 15.58 11.9133 16 12.2633C16.43 12.6133 17.06 12.5633 17.41 12.1333L21.65 7.0233C21.96 6.6533 21.96 6.1133 21.65 5.7433L17.41 0.633302C17.06 0.213302 16.42 0.153302 16 0.503302Z" fill={colorCode} />
    </svg>
  );
}
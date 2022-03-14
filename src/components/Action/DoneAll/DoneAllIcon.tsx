import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDoneAllProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DoneAllIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDoneAllProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.3 0.683342C16.91 0.293342 16.28 0.293342 15.89 0.683342L10.25 6.32334L11.66 7.73334L17.3 2.08334C17.68 1.70334 17.68 1.06334 17.3 0.683342ZM21.54 0.673342L11.66 10.5533L8.18002 7.08334C7.79002 6.69334 7.16001 6.69334 6.77001 7.08334C6.38001 7.47334 6.38001 8.10334 6.77001 8.49334L10.95 12.6733C11.34 13.0633 11.97 13.0633 12.36 12.6733L22.95 2.09334C23.34 1.70334 23.34 1.07334 22.95 0.683342H22.94C22.56 0.283342 21.93 0.283342 21.54 0.673342ZM1.12001 8.50334L5.30001 12.6833C5.69001 13.0733 6.32001 13.0733 6.71001 12.6833L7.41001 11.9833L2.53001 7.08334C2.14001 6.69334 1.51001 6.69334 1.12001 7.08334C0.730015 7.47334 0.730015 8.11334 1.12001 8.50334Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IExitToAppProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ExitToAppIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IExitToAppProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.79 13.6733C8.18 14.0633 8.81 14.0633 9.2 13.6733L12.79 10.0833C13.18 9.6933 13.18 9.0633 12.79 8.6733L9.2 5.0833C8.81 4.6933 8.18 4.6933 7.79 5.0833C7.4 5.4733 7.4 6.1033 7.79 6.4933L9.67 8.3833H1C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833H9.67L7.79 12.2633C7.4 12.6533 7.41 13.2933 7.79 13.6733ZM16 0.383301H2C0.89 0.383301 0 1.2833 0 2.3833V5.3833C0 5.9333 0.45 6.3833 1 6.3833C1.55 6.3833 2 5.9333 2 5.3833V3.3833C2 2.8333 2.45 2.3833 3 2.3833H15C15.55 2.3833 16 2.8333 16 3.3833V15.3833C16 15.9333 15.55 16.3833 15 16.3833H3C2.45 16.3833 2 15.9333 2 15.3833V13.3833C2 12.8333 1.55 12.3833 1 12.3833C0.45 12.3833 0 12.8333 0 13.3833V16.3833C0 17.4833 0.9 18.3833 2 18.3833H16C17.1 18.3833 18 17.4833 18 16.3833V2.3833C18 1.2833 17.1 0.383301 16 0.383301Z" fill={colorCode} />
    </svg>
  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPendingActionsProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PendingActionsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPendingActionsProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 2.3833H10.82C10.4 1.2233 9.3 0.383301 8 0.383301C6.7 0.383301 5.6 1.2233 5.18 2.3833H2C0.9 2.3833 0 3.2833 0 4.3833V19.3833C0 20.4833 0.9 21.3833 2 21.3833H8.11C7.52 20.8133 7.04 20.1333 6.69 19.3833H2V4.3833H4V5.3833C4 6.4833 4.9 7.3833 6 7.3833H10C11.1 7.3833 12 6.4833 12 5.3833V4.3833H14V9.4633C14.71 9.5633 15.38 9.7733 16 10.0633V4.3833C16 3.2833 15.1 2.3833 14 2.3833ZM8 4.3833C7.45 4.3833 7 3.9333 7 3.3833C7 2.8333 7.45 2.3833 8 2.3833C8.55 2.3833 9 2.8333 9 3.3833C9 3.9333 8.55 4.3833 8 4.3833ZM13 11.3833C10.24 11.3833 8 13.6233 8 16.3833C8 19.1433 10.24 21.3833 13 21.3833C15.76 21.3833 18 19.1433 18 16.3833C18 13.6233 15.76 11.3833 13 11.3833ZM14.29 18.3833L12.64 16.7333C12.55 16.6433 12.49 16.5133 12.49 16.3833V13.8933C12.49 13.6133 12.71 13.3933 12.99 13.3933C13.27 13.3933 13.49 13.6133 13.49 13.8933V16.1833L14.99 17.6833C15.19 17.8833 15.19 18.1933 14.99 18.3933C14.8 18.5833 14.49 18.5833 14.29 18.3833Z" fill={colorCode} />
    </svg>
  );
}
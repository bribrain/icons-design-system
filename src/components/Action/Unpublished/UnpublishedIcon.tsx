import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IUnpublishedProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function UnpublishedIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IUnpublishedProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.49 18.8733L2.51 1.8933C2.12 1.5033 1.49 1.5033 1.1 1.8933C0.710003 2.2833 0.710003 2.9133 1.1 3.3033L2.66 4.8633C1.41 6.7433 0.780003 9.0733 1.07 11.5633C1.6 16.1033 5.28 19.7833 9.81 20.3033C12.3 20.5933 14.62 19.9633 16.51 18.7133L18.07 20.2733C18.46 20.6633 19.09 20.6633 19.48 20.2733C19.88 19.8933 19.88 19.2633 19.49 18.8733ZM8.88 14.2733L6.05 11.4433C5.66 11.0533 5.66 10.4233 6.05 10.0333C6.44 9.6433 7.07 9.6433 7.46 10.0333L9.58 12.1533L9.76 11.9733L11.17 13.3833L10.29 14.2633C9.9 14.6633 9.27 14.6633 8.88 14.2733ZM12.59 9.1433L5.49 2.0433C7.37 0.793297 9.7 0.163296 12.19 0.453296C16.73 0.983296 20.41 4.6633 20.93 9.1933C21.22 11.6833 20.59 14.0133 19.34 15.8933L14 10.5533L15.94 8.6133C16.33 8.2233 16.33 7.5933 15.94 7.2033C15.55 6.8133 14.92 6.8133 14.53 7.2033L12.59 9.1433Z" fill={colorCode} />
    </svg>
  );
}
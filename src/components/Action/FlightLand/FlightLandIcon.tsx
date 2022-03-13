import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFlightTakeoffProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlightTakeoffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFlightTakeoffProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.5 15.3833H1.5C0.95 15.3833 0.5 15.8333 0.5 16.3833C0.5 16.9333 0.95 17.3833 1.5 17.3833H18.5C19.05 17.3833 19.5 16.9333 19.5 16.3833C19.5 15.8333 19.05 15.3833 18.5 15.3833ZM20.07 6.02333C19.85 5.22333 19.03 4.75333 18.23 4.96333L12.92 6.38333L6.46 0.363332C6.19 0.103332 5.8 0.0133323 5.44 0.113332C4.76 0.303332 4.44 1.08333 4.79 1.69333L8.23 7.65333L3.26 8.98333L1.69 7.74333C1.44 7.55333 1.12 7.48333 0.81 7.56333L0.48 7.65333C0.16 7.73333 0.0100003 8.10333 0.18 8.38333L2.06 11.6333C2.29 12.0233 2.75 12.2133 3.18 12.1033L19 7.86333C19.8 7.64333 20.28 6.82333 20.07 6.02333Z" fill={colorCode} />
    </svg>
  );
}
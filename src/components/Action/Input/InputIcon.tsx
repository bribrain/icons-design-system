import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IInputProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function InputIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IInputProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M20 0.393311H2C0.9 0.393311 0 1.29331 0 2.39331V5.38331C0 5.93331 0.45 6.38331 1 6.38331C1.55 6.38331 2 5.93331 2 5.38331V3.37331C2 2.82331 2.45 2.37331 3 2.37331H19C19.55 2.37331 20 2.82331 20 3.37331V15.4033C20 15.9533 19.55 16.4033 19 16.4033H3C2.45 16.4033 2 15.9533 2 15.4033V13.3833C2 12.8333 1.55 12.3833 1 12.3833C0.45 12.3833 0 12.8333 0 13.3833V16.3933C0 17.4833 0.89 18.3733 1.98 18.3733H20C21.1 18.3733 22 17.4733 22 16.3733V2.39331C22 1.29331 21.1 0.393311 20 0.393311ZM10.85 12.5333L13.64 9.74331C13.84 9.54331 13.84 9.23331 13.64 9.03331L10.85 6.24331C10.54 5.92331 10 6.14331 10 6.59331V8.38331H1C0.45 8.38331 0 8.83331 0 9.38331C0 9.93331 0.45 10.3833 1 10.3833H10V12.1733C10 12.6233 10.54 12.8433 10.85 12.5333V12.5333Z" fill={colorCode} />
    </svg>
  );
}
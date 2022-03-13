import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IListProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ListIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IListProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 11"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M1 6.3833C1.55 6.3833 2 5.9333 2 5.3833C2 4.8333 1.55 4.3833 1 4.3833C0.45 4.3833 0 4.8333 0 5.3833C0 5.9333 0.45 6.3833 1 6.3833ZM1 10.3833C1.55 10.3833 2 9.9333 2 9.3833C2 8.8333 1.55 8.3833 1 8.3833C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833ZM1 2.3833C1.55 2.3833 2 1.9333 2 1.3833C2 0.833301 1.55 0.383301 1 0.383301C0.45 0.383301 0 0.833301 0 1.3833C0 1.9333 0.45 2.3833 1 2.3833ZM5 6.3833H17C17.55 6.3833 18 5.9333 18 5.3833C18 4.8333 17.55 4.3833 17 4.3833H5C4.45 4.3833 4 4.8333 4 5.3833C4 5.9333 4.45 6.3833 5 6.3833ZM5 10.3833H17C17.55 10.3833 18 9.9333 18 9.3833C18 8.8333 17.55 8.3833 17 8.3833H5C4.45 8.3833 4 8.8333 4 9.3833C4 9.9333 4.45 10.3833 5 10.3833ZM4 1.3833C4 1.9333 4.45 2.3833 5 2.3833H17C17.55 2.3833 18 1.9333 18 1.3833C18 0.833301 17.55 0.383301 17 0.383301H5C4.45 0.383301 4 0.833301 4 1.3833ZM1 6.3833C1.55 6.3833 2 5.9333 2 5.3833C2 4.8333 1.55 4.3833 1 4.3833C0.45 4.3833 0 4.8333 0 5.3833C0 5.9333 0.45 6.3833 1 6.3833ZM1 10.3833C1.55 10.3833 2 9.9333 2 9.3833C2 8.8333 1.55 8.3833 1 8.3833C0.45 8.3833 0 8.8333 0 9.3833C0 9.9333 0.45 10.3833 1 10.3833ZM1 2.3833C1.55 2.3833 2 1.9333 2 1.3833C2 0.833301 1.55 0.383301 1 0.383301C0.45 0.383301 0 0.833301 0 1.3833C0 1.9333 0.45 2.3833 1 2.3833ZM5 6.3833H17C17.55 6.3833 18 5.9333 18 5.3833C18 4.8333 17.55 4.3833 17 4.3833H5C4.45 4.3833 4 4.8333 4 5.3833C4 5.9333 4.45 6.3833 5 6.3833ZM5 10.3833H17C17.55 10.3833 18 9.9333 18 9.3833C18 8.8333 17.55 8.3833 17 8.3833H5C4.45 8.3833 4 8.8333 4 9.3833C4 9.9333 4.45 10.3833 5 10.3833ZM4 1.3833C4 1.9333 4.45 2.3833 5 2.3833H17C17.55 2.3833 18 1.9333 18 1.3833C18 0.833301 17.55 0.383301 17 0.383301H5C4.45 0.383301 4 0.833301 4 1.3833Z" fill={colorCode} />
    </svg>
  );
}
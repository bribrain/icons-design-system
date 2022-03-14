import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISearchProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SearchIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISearchProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.5 11.3833H11.71L11.43 11.1133C12.63 9.71332 13.25 7.80332 12.91 5.77332C12.44 2.99332 10.12 0.773316 7.32 0.433316C3.09 -0.086684 -0.47 3.47332 0.05 7.70332C0.39 10.5033 2.61 12.8233 5.39 13.2933C7.42 13.6333 9.33 13.0133 10.73 11.8133L11 12.0933V12.8833L15.25 17.1333C15.66 17.5433 16.33 17.5433 16.74 17.1333C17.15 16.7233 17.15 16.0533 16.74 15.6433L12.5 11.3833ZM6.5 11.3833C4.01 11.3833 2 9.37332 2 6.88332C2 4.39332 4.01 2.38332 6.5 2.38332C8.99 2.38332 11 4.39332 11 6.88332C11 9.37332 8.99 11.3833 6.5 11.3833Z" fill={colorCode} />
    </svg>
  );
}
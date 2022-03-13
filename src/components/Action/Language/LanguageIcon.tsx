import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILanguageProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LanguageIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILanguageProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M9.99 0.383301C4.47 0.383301 0 4.8633 0 10.3833C0 15.9033 4.47 20.3833 9.99 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 9.99 0.383301ZM16.92 6.3833H13.97C13.65 5.1333 13.19 3.9333 12.59 2.8233C14.43 3.4533 15.96 4.7333 16.92 6.3833ZM10 2.4233C10.83 3.6233 11.48 4.9533 11.91 6.3833H8.09C8.52 4.9533 9.17 3.6233 10 2.4233ZM2.26 12.3833C2.1 11.7433 2 11.0733 2 10.3833C2 9.6933 2.1 9.0233 2.26 8.3833H5.64C5.56 9.0433 5.5 9.7033 5.5 10.3833C5.5 11.0633 5.56 11.7233 5.64 12.3833H2.26ZM3.08 14.3833H6.03C6.35 15.6333 6.81 16.8333 7.41 17.9433C5.57 17.3133 4.04 16.0433 3.08 14.3833ZM6.03 6.3833H3.08C4.04 4.7233 5.57 3.4533 7.41 2.8233C6.81 3.9333 6.35 5.1333 6.03 6.3833ZM10 18.3433C9.17 17.1433 8.52 15.8133 8.09 14.3833H11.91C11.48 15.8133 10.83 17.1433 10 18.3433ZM12.34 12.3833H7.66C7.57 11.7233 7.5 11.0633 7.5 10.3833C7.5 9.7033 7.57 9.0333 7.66 8.3833H12.34C12.43 9.0333 12.5 9.7033 12.5 10.3833C12.5 11.0633 12.43 11.7233 12.34 12.3833ZM12.59 17.9433C13.19 16.8333 13.65 15.6333 13.97 14.3833H16.92C15.96 16.0333 14.43 17.3133 12.59 17.9433ZM14.36 12.3833C14.44 11.7233 14.5 11.0633 14.5 10.3833C14.5 9.7033 14.44 9.0433 14.36 8.3833H17.74C17.9 9.0233 18 9.6933 18 10.3833C18 11.0733 17.9 11.7433 17.74 12.3833H14.36Z" fill={colorCode} />
    </svg>
  );
}
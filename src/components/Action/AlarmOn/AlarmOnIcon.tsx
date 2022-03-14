import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAlarmOnIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AlarmOnIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAlarmOnIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.94 8.49332L8.54 12.9133L6.94 11.3133C6.65 11.0233 6.17 11.0233 5.88 11.3133C5.59 11.6033 5.59 12.0833 5.88 12.3733L8 14.4933C8.29 14.7833 8.77 14.7833 9.06 14.4933L14 9.55332C14.29 9.26332 14.29 8.78332 14 8.49332C13.71 8.20332 13.23 8.20332 12.94 8.49332ZM19.18 3.39332L16.1 0.833319C15.68 0.483319 15.05 0.533319 14.69 0.963319C14.34 1.38332 14.4 2.01332 14.82 2.37332L17.89 4.93332C18.31 5.28332 18.94 5.23332 19.3 4.80332C19.66 4.38332 19.6 3.75332 19.18 3.39332ZM2.1 4.93332L5.17 2.37332C5.6 2.01332 5.66 1.38332 5.3 0.963319C4.95 0.533319 4.32 0.483319 3.9 0.833319L0.819998 3.39332C0.399998 3.75332 0.339998 4.38332 0.699998 4.80332C1.05 5.23332 1.68 5.28332 2.1 4.93332ZM10 2.38332C5.03 2.38332 0.999998 6.41332 0.999998 11.3833C0.999998 16.3533 5.03 20.3833 10 20.3833C14.97 20.3833 19 16.3533 19 11.3833C19 6.41332 14.97 2.38332 10 2.38332ZM10 18.3833C6.14 18.3833 3 15.2433 3 11.3833C3 7.52332 6.14 4.38332 10 4.38332C13.86 4.38332 17 7.52332 17 11.3833C17 15.2433 13.86 18.3833 10 18.3833Z" fill={colorCode} />
    </svg>
  );
}
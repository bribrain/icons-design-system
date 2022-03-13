import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISupervisedUserCircleProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SupervisedUserCircleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISupervisedUserCircleProps) {
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
      <path d="M10 0.383301C4.48 0.383301 0 4.8633 0 10.3833C0 15.9033 4.48 20.3833 10 20.3833C15.52 20.3833 20 15.9033 20 10.3833C20 4.8633 15.52 0.383301 10 0.383301ZM13.61 6.7233C14.68 6.7233 15.54 7.5833 15.54 8.6533C15.54 9.7233 14.68 10.5833 13.61 10.5833C12.54 10.5833 11.68 9.7233 11.68 8.6533C11.67 7.5833 12.54 6.7233 13.61 6.7233ZM7.61 5.1433C8.91 5.1433 9.97 6.2033 9.97 7.5033C9.97 8.8033 8.91 9.8633 7.61 9.8633C6.31 9.8633 5.25 8.8033 5.25 7.5033C5.25 6.1933 6.3 5.1433 7.61 5.1433ZM7.61 14.2733V18.0233C5.21 17.2733 3.31 15.4233 2.47 13.0633C3.52 11.9433 6.14 11.3733 7.61 11.3733C8.14 11.3733 8.81 11.4533 9.51 11.5933C7.87 12.4633 7.61 13.6133 7.61 14.2733ZM10 18.3833C9.73 18.3833 9.47 18.3733 9.21 18.3433V14.2733C9.21 12.8533 12.15 12.1433 13.61 12.1433C14.68 12.1433 16.53 12.5333 17.45 13.2933C16.28 16.2633 13.39 18.3833 10 18.3833Z" fill={colorCode} />
    </svg>
  );
}
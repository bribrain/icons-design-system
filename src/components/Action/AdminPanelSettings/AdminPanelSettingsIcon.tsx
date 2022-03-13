import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAdminPanelSettingsIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AdminPanelSettingsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAdminPanelSettingsIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 8.38336C14.34 8.38336 14.67 8.42336 15 8.47336V4.96336C15 4.16336 14.53 3.44336 13.8 3.13336L8.3 0.733359C7.79 0.513359 7.21 0.513359 6.7 0.733359L1.2 3.13336C0.47 3.45336 0 4.17336 0 4.96336V8.56336C0 13.1034 3.2 17.3534 7.5 18.3834C8.05 18.2534 8.58 18.0634 9.1 17.8334C8.41 16.8534 8 15.6634 8 14.3834C8 11.0734 10.69 8.38336 14 8.38336Z" fill={colorCode} />
      <path d="M14 10.3833C11.79 10.3833 10 12.1733 10 14.3833C10 16.5933 11.79 18.3833 14 18.3833C16.21 18.3833 18 16.5933 18 14.3833C18 12.1733 16.21 10.3833 14 10.3833ZM14 11.7633C14.62 11.7633 15.12 12.2733 15.12 12.8833C15.12 13.4933 14.61 14.0033 14 14.0033C13.39 14.0033 12.88 13.4933 12.88 12.8833C12.88 12.2733 13.38 11.7633 14 11.7633ZM14 17.1333C13.07 17.1333 12.26 16.6733 11.76 15.9633C11.81 15.2433 13.27 14.8833 14 14.8833C14.73 14.8833 16.19 15.2433 16.24 15.9633C15.74 16.6733 14.93 17.1333 14 17.1333Z" fill={colorCode} />
    </svg>

  );
}
import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISettingsInputCompositeProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SettingsInputCompositeIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISettingsInputCompositeProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 1.3833C4 0.833301 3.55 0.383301 3 0.383301C2.45 0.383301 2 0.833301 2 1.3833V5.3833H1C0.45 5.3833 0 5.8333 0 6.3833V11.3833H6V6.3833C6 5.8333 5.55 5.3833 5 5.3833H4V1.3833ZM8 15.3833C8 16.6833 8.84 17.7833 10 18.2033V21.3833C10 21.9333 10.45 22.3833 11 22.3833C11.55 22.3833 12 21.9333 12 21.3833V18.2033C13.16 17.7933 14 16.6933 14 15.3833V13.3833H8V15.3833ZM0 15.3833C0 16.6833 0.84 17.7833 2 18.2033V21.3833C2 21.9333 2.45 22.3833 3 22.3833C3.55 22.3833 4 21.9333 4 21.3833V18.2033C5.16 17.7833 6 16.6833 6 15.3833V13.3833H0V15.3833ZM20 5.3833V1.3833C20 0.833301 19.55 0.383301 19 0.383301C18.45 0.383301 18 0.833301 18 1.3833V5.3833H17C16.45 5.3833 16 5.8333 16 6.3833V11.3833H22V6.3833C22 5.8333 21.55 5.3833 21 5.3833H20ZM12 1.3833C12 0.833301 11.55 0.383301 11 0.383301C10.45 0.383301 10 0.833301 10 1.3833V5.3833H9C8.45 5.3833 8 5.8333 8 6.3833V11.3833H14V6.3833C14 5.8333 13.55 5.3833 13 5.3833H12V1.3833ZM16 15.3833C16 16.6833 16.84 17.7833 18 18.2033V21.3833C18 21.9333 18.45 22.3833 19 22.3833C19.55 22.3833 20 21.9333 20 21.3833V18.2033C21.16 17.7933 22 16.6933 22 15.3833V13.3833H16V15.3833Z" fill={colorCode} />
    </svg>
  );
}
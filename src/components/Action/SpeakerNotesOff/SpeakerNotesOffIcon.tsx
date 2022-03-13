import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISpeakerNotesOffProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SpeakerNotesOffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISpeakerNotesOffProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.91 0.743301C1.56 0.393301 0.990002 0.393301 0.640002 0.743301C0.290002 1.0933 0.290002 1.6633 0.640002 2.0133L2.02 3.3933L2 20.3833L6 16.3833H15L20.09 21.4733C20.44 21.8233 21.01 21.8233 21.36 21.4733C21.71 21.1233 21.71 20.5533 21.36 20.2033L1.91 0.743301ZM7 12.3833C6.45 12.3833 6 11.9333 6 11.3833C6 10.8333 6.45 10.3833 7 10.3833C7.55 10.3833 8 10.8333 8 11.3833C8 11.9333 7.55 12.3833 7 12.3833ZM7 9.3833C6.45 9.3833 6 8.9333 6 8.3833C6 7.8333 6.45 7.3833 7 7.3833C7.55 7.3833 8 7.8333 8 8.3833C8 8.9333 7.55 9.3833 7 9.3833ZM20 0.383301H4.08L11.08 7.3833H17C17.55 7.3833 18 7.8333 18 8.3833C18 8.9333 17.55 9.3833 17 9.3833H13.08L20.07 16.3733C21.14 16.3333 22 15.4633 22 14.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM17 6.3833H11C10.45 6.3833 10 5.9333 10 5.3833C10 4.8333 10.45 4.3833 11 4.3833H17C17.55 4.3833 18 4.8333 18 5.3833C18 5.9333 17.55 6.3833 17 6.3833Z" fill={colorCode} />
    </svg>
  );
}
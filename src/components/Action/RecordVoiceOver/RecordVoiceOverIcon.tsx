import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRecordVoiceOverProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RecordVoiceOverIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRecordVoiceOverProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 13.3833C11.2091 13.3833 13 11.5924 13 9.3833C13 7.17416 11.2091 5.3833 9 5.3833C6.79086 5.3833 5 7.17416 5 9.3833C5 11.5924 6.79086 13.3833 9 13.3833Z" fill={colorCode} />
      <path d="M9 15.3833C6.33 15.3833 1 16.7233 1 19.3833V20.3833C1 20.9333 1.45 21.3833 2 21.3833H16C16.55 21.3833 17 20.9333 17 20.3833V19.3833C17 16.7233 11.67 15.3833 9 15.3833ZM15.47 8.15328C15.79 8.94328 15.79 9.82328 15.47 10.6133C15.28 11.0833 15.36 11.6133 15.72 11.9733L15.75 12.0033C16.33 12.5833 17.32 12.4633 17.7 11.7333C18.46 10.2833 18.46 8.58328 17.68 7.07328C17.3 6.33328 16.3 6.19328 15.71 6.78328L15.7 6.79328C15.36 7.14328 15.28 7.68328 15.47 8.15328ZM19.18 3.27328C18.78 3.67328 18.72 4.29328 19.05 4.75328C21.02 7.49328 21.01 11.1633 19.02 14.0033C18.7 14.4533 18.77 15.0733 19.16 15.4633L19.19 15.4933C19.68 15.9833 20.51 15.9433 20.93 15.3933C23.68 11.8533 23.69 7.02328 20.93 3.37328C20.51 2.82328 19.67 2.78328 19.18 3.27328Z" fill={colorCode} />
    </svg>
  );
}
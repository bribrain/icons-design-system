import React from "react";
import { Meta, Story } from "@storybook/react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

import HighlightOffIcon from "./HighlightOffIcon";


export default {
  title: "BRIBrain/HighlightOff",
  component: HighlightOffIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      defaultValue: 24,
      description: "Size Icon",
    },
    rotate: {
      defaultValue: 0,
      description: "Rotate Icon",
    },
    color: {
      options: Object.keys(colorDatas).map((item: string) => item),
      control: { type: "select" },
      description: "Color Icon",
    },
  },
} as Meta<typeof HighlightOffIcon>;

const size: number = 24;
const rotate: number = 0;
const color: Color = "black";
const Template: Story<typeof HighlightOffIcon> = (args) => (
  <HighlightOffIcon {...args} />
);

export const Icon = Template.bind({});
Icon.args = {
  size: size,
  rotate: rotate,
  color: color,
};
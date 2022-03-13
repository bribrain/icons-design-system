import React from "react";
import { Meta, Story } from "@storybook/react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

import PendingIcon from "./PendingIcon";


export default {
  title: "BRIBrain/Pending",
  component: PendingIcon,
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
} as Meta<typeof PendingIcon>;

const size: number = 24;
const rotate: number = 0;
const color: Color = "black";
const Template: Story<typeof PendingIcon> = (args) => (
  <PendingIcon {...args} />
);

export const Icon = Template.bind({});
Icon.args = {
  size: size,
  rotate: rotate,
  color: color,
};
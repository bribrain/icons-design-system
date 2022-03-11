import React from "react"
import { Meta, Story } from "@storybook/react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

import AttributionIcon from "./AttributionIcon"

export default {
  title: "BRIBrain/BrowserNotSupported",
  component: AttributionIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      defaultValue: 24,
      description: "Size Icon",
    },
    rotate: {
      //   options: ["regular", "medium", "semibold", "bold"],
      //   control: { type: "select" },
      defaultValue: 0,
      description: "Rotate Icon",
    },
    color: {
      options: Object.keys(colorDatas).map((item: string) => item),
      control: { type: "select" },
      description: "Color Icon",
    },
  },
} as Meta<typeof AttributionIcon>

const size: number = 24
const rotate: number = 0
const color: Color = "black"
const Template: Story<typeof AttributionIcon> = (args) => <AttributionIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: size,
  rotate: rotate,
  color: color,
}

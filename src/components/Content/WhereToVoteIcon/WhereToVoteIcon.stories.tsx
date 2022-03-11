import React from "react"
import { Meta, Story } from "@storybook/react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

import WhereToVoteIcon from "./WhereToVoteIcon"

export default {
  title: "BRIBrain/BrowserNotSupported",
  component: WhereToVoteIcon,
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
} as Meta<typeof WhereToVoteIcon>

const size: number = 24
const rotate: number = 0
const color: Color = "grey-100"
const Template: Story<typeof WhereToVoteIcon> = (args) => <WhereToVoteIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: size,
  rotate: rotate,
  color: color,
}

import { Meta, Story } from '@storybook/react'

import { Main, MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    children: 'string'
  }
} as Meta

export const Default: Story<MainProps> = (args) => <Main {...args} />

Default.args = {
  children: 'Lorem ipsum'
}

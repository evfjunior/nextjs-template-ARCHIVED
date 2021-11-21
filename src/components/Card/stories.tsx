import { Meta, Story } from '@storybook/react'

import { Card, CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    hero: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta

export const Default: Story<CardProps> = (args) => <Card {...args} />
Default.args = {
  heading: 'Lorem ipsum',
  leading: 'Dolor sit amet, consectetur adipiscing elit.'
}

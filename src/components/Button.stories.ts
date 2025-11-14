import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    primary: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Button',
    primary: false,
    size: 'medium',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: '主要按钮',
    primary: true,
  },
}

export const Secondary: Story = {
  args: {
    label: '次要按钮',
  },
}

export const Large: Story = {
  args: {
    label: '大按钮',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    label: '小按钮',
    size: 'small',
  },
}

export const Disabled: Story = {
  args: {
    label: '禁用按钮',
    disabled: true,
  },
}


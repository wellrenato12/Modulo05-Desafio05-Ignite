import type { StoryObj, Meta } from '@storybook/react'
import {
  Tooltip,
  Button,
  TooltipProps,
  Box,
} from '@wellrenato12-ignite-ui/react'

export default {
  title: 'form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a Tooltip',
  },
  argTypes: {
    children: {
      coltrol: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            background: '$gray500',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

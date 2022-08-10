import React from 'react';
import { Story } from '@storybook/react';

import { icon } from '@ui/utils/storybook/argTypes';

import Icon, { IconProps } from './Icon';

export default {
  title: 'atoms/icons/icon',
  component: Icon,
  argTypes: { icon },
  args: {
    icon: icon.options[0]
  },
  parameters: {
    docs: {
      instamed: {
        badges: ['rest']
      }
    }
  }
};

const story: Story<IconProps> = (args) => <Icon {...args} className='w-8 h-8' />;

export const Default = story.bind(null);

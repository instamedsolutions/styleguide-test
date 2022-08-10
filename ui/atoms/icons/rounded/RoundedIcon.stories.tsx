import React from 'react';
import { Story } from '@storybook/react';

import { icon, color } from '@ui/utils/storybook/argTypes';

import RoundedIcon, { RoundedIconProps } from './RoundedIcon';

export default {
  title: 'atoms/icons/rounded',
  component: RoundedIcon,
  argTypes: { icon, color },
  args: {
    icon: 'check',
    color: 'success'
  }
};

const story: Story<RoundedIconProps> = (args) => (
  <div className='flex'>
    <RoundedIcon {...args} />
  </div>
);

export const Default = story.bind(null);

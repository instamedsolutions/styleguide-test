import React from 'react';
import { Story } from '@storybook/react';
import Picto, { PictoType } from './Picto';

export default {
  title: 'atoms/icons/picto',
  component: Picto,
  args: {
    icon: 'hourglassTop'
  },
  parameters: {
    docs: {
      instamed: {
        badges: ['rest']
      }
    }
  }
};

const story: Story<PictoType> = (args) => <Picto {...args} />;

export const Default = story.bind(null);

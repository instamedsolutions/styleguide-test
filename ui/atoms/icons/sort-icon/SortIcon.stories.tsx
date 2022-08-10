import React from 'react';
import { Story } from '@storybook/react';
import SortIcon, { SortIconType } from './SortIcon';

export default {
  title: 'atoms/icons/sort-icon',
  component: SortIcon,
  args: {
    sort: 'desc'
  },
  parameters: {
    docs: {
      instamed: {
        badges: ['rest']
      }
    }
  }
};

const story: Story<SortIconType> = (args) => <SortIcon {...args} />;

export const Default = story.bind(null);

import React from 'react';
import { Story } from '@storybook/react';

import { ButtonProps } from '@ui/atoms/buttons/button/Button';
import FilterButton from './FilterButton';

export default {
  title: 'atoms/buttons/filter-button',
  component: FilterButton,
  args: {
  },
  parameters: {
    docs: {
      instamed: {
        badges: ['rest']
      }
    }
  }
};

const story: Story<ButtonProps> = (args) => <FilterButton {...args}>Filtrer</FilterButton>;

export const Default = story.bind(null);

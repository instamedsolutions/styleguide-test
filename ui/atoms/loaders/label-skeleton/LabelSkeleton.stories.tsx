import React from 'react';
import { Story } from '@storybook/react';

import LabelSkeleton from './LabelSkeleton';

export default {
  title: 'atoms/loaders/label-skeleton',
  component: LabelSkeleton
};

const story: Story = (args) => <LabelSkeleton {...args} />;

export const Default = story.bind(null);

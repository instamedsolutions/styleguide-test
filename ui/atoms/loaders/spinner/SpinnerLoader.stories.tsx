import React from 'react';
import { Story } from '@storybook/react';

import SpinnerLoader, { SpinnerLoaderProps } from './SpinnerLoader';

export default {
  title: 'atoms/loaders/spinner',
  component: SpinnerLoader
};

const story: Story<SpinnerLoaderProps> = (args) => <SpinnerLoader {...args} />;

export const Default = story.bind(null);

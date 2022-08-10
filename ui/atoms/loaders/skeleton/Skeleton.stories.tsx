import React from 'react';
import { Story } from '@storybook/react';

import Component, { sizes, SizeType } from './Skeleton';

export default {
  title: 'atoms/loaders/skeleton',
  component: Component,
  parameters: {
    layout: 'centered'
  }
};

const story: Story = () => (
  <div className='flex flex-col'>
    {Object.keys(sizes).map(
      (size, key) => (
        <Component
          className='mb-2 w-full'
          size={size as SizeType}
          key={key}
        />
      )
    )}
  </div>
);

export const Default = story.bind(null);

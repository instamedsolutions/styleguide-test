import React from 'react';
import { Story } from '@storybook/react';

import { color } from '@ui/utils/storybook/argTypes';

import Overlay, { OverlayType } from './Overlay';

export default {
  title: 'atoms/overlay',
  component: Overlay,
  argTypes: { color },
  parameters: {
    docs: {
      instamed: {
        badges: ['rest']
      }
    }
  }
};

const story: Story<OverlayType> = () => (
  <div className='relative w-[300px] h-[300px]'><Overlay /></div>
);

export const Default = story.bind(null);

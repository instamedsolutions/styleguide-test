import React from 'react';
import { Story } from '@storybook/react';

import Separator, { SeparatorProps } from './Separator';

export default {
  title: 'atoms/containers/separator',
  component: Separator
};

const story: Story<SeparatorProps> = (args) => <Separator {...args} />;

export const Default = story.bind(null);

import React from 'react';
import { Story } from '@storybook/react';
import DropZone, { DropZoneProps } from './DropZone';

export default {
  title: 'molecule/dropZones/dropZone/DropZone',
  component: DropZone
};

const story: Story<DropZoneProps> = (args) => <DropZone {...args} />;

export const Default = story.bind(null);

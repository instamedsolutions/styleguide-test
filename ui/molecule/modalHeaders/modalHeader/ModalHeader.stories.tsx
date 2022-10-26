import React from 'react';
import { Story } from '@storybook/react';
import ModalHeader, { ModalHeaderProps } from './ModalHeader';

export default {
  title: 'molecule/modalHeaders/modalHeader/ModalHeader',
  component: ModalHeader
};

const story: Story<ModalHeaderProps> = (args) => <ModalHeader {...args} />;

export const Default = story.bind(null);
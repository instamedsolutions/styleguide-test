import React from 'react';
import { Story } from '@storybook/react';
import UploadModal, { UploadModalProps } from './UploadModal';

export default {
  title: 'molecule/uploadModals/uploadModal/UploadModal',
  component: UploadModal
};

const story: Story<UploadModalProps> = (args) => <UploadModal {...args} />;

export const Default = story.bind(null);

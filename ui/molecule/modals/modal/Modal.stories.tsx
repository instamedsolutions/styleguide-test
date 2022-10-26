import { Story } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import React from "react";

export default {
  title: 'molecule/modals/modal/Modal',
  component: Modal,
};

const story: Story<ModalProps> = ({ children, ...args }) => (
  <Modal {...args}>
    {children}
  </Modal>
);

export const Default = story.bind(null);

export const withTitle = story.bind(null);
withTitle.args = {
  title:"Uploader un fichier"
};

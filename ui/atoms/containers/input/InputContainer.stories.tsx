import React from 'react';
import { Story } from '@storybook/react';

import InputContainer, { InputContainerProps } from './InputContainer';

export default {
  title: 'atoms/containers/input-container',
  component: InputContainer,
  args: {
    label: 'label'
  },
  parameters: {
    docs: {
      instamed: {
        badges: ['rest']
      }
    }
  }
};

const story: Story<InputContainerProps> = (args) => (
  <InputContainer {...args} >
    this is a children content
  </InputContainer>
);

export const Default = story.bind(null);

export const Loading = story.bind(null);
Loading.args = {
  loading: true
};

export const Error = story.bind(null);
Error.args = {
  error: 'this is an error'
};

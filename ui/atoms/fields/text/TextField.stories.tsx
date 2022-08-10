import React from 'react';
import { Story } from '@storybook/react';
import { icon } from '@ui/utils/storybook/argTypes';

import Component, { TextFieldProps } from './TextField';

export default {
  title: 'atoms/fields/text field',
  component: Component,
  argTypes: { icon },
  args: {
    placeholder: 'placeholder',
    loading: false,
    error: false,
    name: 'name'
  }
};

const story: Story<TextFieldProps> = ({ loading, ...args }) => (
  <div>
    <Component {...args} loading={loading} />
    <br />
    <Component {...args} loading={!loading} />
  </div>
);

export const Default = story.bind(null);

export const WithLabel = story.bind(null);
WithLabel.args = {
  value: 'Lorem',
  label: 'Identifiant'
};

export const WithLabelReadOnly = story.bind(null);
WithLabelReadOnly.args = {
  value: 'read only content',
  label: 'Identifiant',
  readOnly: true
};

export const WithIcon = story.bind(null);
WithIcon.args = {
  icon: 'eye'
};

export const WithIconWithoutAction = story.bind(null);
WithIconWithoutAction.args = {
  icon: 'eye',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  onIconClick: false
};

export const Error = story.bind(null);
Error.args = { error: 'this is an error', label: 'this is a label' };

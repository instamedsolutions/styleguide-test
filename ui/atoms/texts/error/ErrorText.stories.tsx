import React from 'react';

import { Story } from '@storybook/react';

import ErrorText, { ErrorTextProps } from './ErrorText';

export default {
  title: 'atoms/texts/error text',
  component: ErrorText,
  parameters: {
    docs: {
      instamed: {
        badges: ['rest']
      }
    }
  }
};

const story: Story<ErrorTextProps> = (args) => <ErrorText {...args} />;

export const Default = story.bind(null);
Default.args = { children: 'this is an error' };

export const LongText = story.bind(null);
LongText.args = {
  // eslint-disable-next-line max-len
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis sem sed feugiat elementum. Mauris lacinia facilisis ligula, vel volutpat neque ultrices quis. Suspendisse tempor sollicitudin nibh quis consectetur. Mauris non finibus nisl. Aenean nec eros ac lectus sodales vestibulum. Donec elementum sollicitudin tincidunt. Duis sed felis eu libero scelerisque finibus at nec lectus. Vestibulum fringilla erat at augue blandit, nec cursus nisi eleifend.'
};

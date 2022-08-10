import React from 'react';
import { Story } from '@storybook/react';
import cls from 'classnames';

import { buttonTheme } from './utils';
import Button, { ColorType, SizeType } from './Button';

export default {
  title: 'atoms/buttons/button',
  component: Button,
  args: {
    color: 'primary'
  },
  argTypes: {
    color: {
      options: Object.keys(buttonTheme),
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    docs: {
      instamed: {
        badges: ['rest']
      }
    }
  }
};

const sizes: SizeType[] = ['small', 'base', 'large'];

const listStory: Story = (args) => (
  <div className='flex'>
    {Object.keys(buttonTheme).map(
      color => (
        <div key={color}>
          {sizes.map(
            size => (
              <Button
                {...args}
                key={`${color}-${size}`}
                color={color as ColorType}
                size={size}
                className={cls('m-2', { 'w-60': args.loading })}
                onClick={() => alert('nice try')}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)} - {size}
              </Button>
            )
          )}
        </div>
      )
    )}
  </div>
);

export const Default = listStory.bind(null);

export const Loading = listStory.bind(null);
Loading.args = { loading: true };


export const Saving = listStory.bind(null);
Saving.args = { saving: true };


export const Disabled = listStory.bind(null);
Disabled.args = { disabled: true };

export const WithIcon = listStory.bind(null);
WithIcon.args = { icon: 'tips', saving: false };

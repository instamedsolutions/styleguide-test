import React from 'react';
import { Story } from '@storybook/react';

import Link, { LinkProps } from './Link';

export default {
  title: 'atoms/texts/link',
  component: Link,
  parameters: {
    docs: {
      instamed: {
        badges: ['rest']
      }
    }
  }
};

const story: Story<LinkProps> = (args) => <Link {...args}>Are you lost?</Link>;

export const Default = story.bind(null);
Default.args = {
  href: 'http://perdu.com',
  onClick: (e, href) => alert(`onClick action href:${href}`)
};

export const WithHref = story.bind(null);
WithHref.args = {
  href: 'http://perdu.com'
};

export const WithoutOnClick = story.bind(null);
WithoutOnClick.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  onClick: false
};

import React, { FC } from 'react';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

import ImportPath from '@ui/utils/storybook/ImportPath';
import Rest from '@ui/utils/storybook/Rest';

export type LayoutProps = {
  hasStories: boolean;
};

const Layout:FC<LayoutProps> = ({ hasStories = true }) => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <ImportPath />
    {hasStories && <Primary />}
    <Rest />
    <ArgsTable story={PRIMARY_STORY} />
    {hasStories && <Stories />}
  </>
);

export const NoStoriesLayout:FC<LayoutProps> = () => <Layout hasStories={false} />;

export default Layout;

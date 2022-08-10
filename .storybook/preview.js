import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Layout from '@ui/utils/storybook/Layout';
import { theme } from '@ui/utils/tailwindConfig.js';
import Theme from '@ui/theming/styled/ThemeProvider.tsx';

import '@ui/theming/theme.default.css';

export const decorators = [
  (Story) => (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  ),
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  docs: {
    page: Layout
  },
  storySort: {
    order: ['atoms', 'molecules', 'organisms', 'templates', 'theming', 'hooks']
  },
  backgrounds: {
    values: [
      { name: 'white', value: theme.colors.white },
      { name: 'light', value: theme.colors.gray[50] },
      { name: 'dark', value: theme.colors.gray[900] }
    ]
  }
};

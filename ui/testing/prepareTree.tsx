import React from 'react';
import { I18nextProvider } from 'react-i18next';
import ThemeProvider from '@ui/theming/styled/ThemeProvider';

import i18n from './i18n';

export type TreeOptions = {
  lang?: boolean;
}

export const buildPrepareTree = (langContext = i18n) => (
  children: React.ReactElement,
  options: TreeOptions = {}
): React.ReactElement => {
  const { lang } = options;

  if (lang) {
    children = (
      <I18nextProvider i18n={langContext}>
        {children}
      </I18nextProvider>
    );
  }

  children = (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );

  return children;
};

const prepareTree = buildPrepareTree();

export default prepareTree;

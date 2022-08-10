import React from 'react';
import { ThemeProvider } from "styled-components";

import theme from '@ui/theming/theme.json';

type Test = {
  children: React.ReactElement | React.ReactElement[]
}

type ThemeProviderType = (args: Test) => React.ReactElement;
const Theme: ThemeProviderType = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;

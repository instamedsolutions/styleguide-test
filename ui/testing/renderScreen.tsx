import React from 'react';
import { render } from '@testing-library/react';

import prepareTree, { TreeOptions } from './prepareTree';

const renderScreen = (
  children: React.ReactElement,
  options: TreeOptions = {}
): void => {
  render(
    prepareTree(children, options)
  );
};


export default renderScreen;

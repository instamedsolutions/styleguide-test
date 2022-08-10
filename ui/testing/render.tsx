import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import 'jest-styled-components';

import prepareTreeDefault, { TreeOptions } from './prepareTree';

export { act };

export type TreeRender = ReactTestRenderer;

export const buildRender = (prepareTree = prepareTreeDefault) => (
  children: React.ReactElement,
  options: TreeOptions = {}
): ReactTestRenderer => {
  const tree = create(
    prepareTree(children, options)
  );

  return tree;
};

const render = buildRender();

export default render;

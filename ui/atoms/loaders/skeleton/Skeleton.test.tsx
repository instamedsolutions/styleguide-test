import React from 'react';

import render from '@ui/testing/render';

import Skeleton from './Skeleton';

describe('ui/atoms/loaders/skeleton/Skeleton', () => {
  describe('renders correctly', () => {
    it.each([
      {},
      { button: true },
      { field: true }
    ])('%p', opts => {
      const tree = render(<Skeleton {...opts} />);

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});

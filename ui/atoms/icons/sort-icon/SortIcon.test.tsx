import React from 'react';

import render from '@ui/testing/render';

import SortIcon from './SortIcon';

describe('atoms/icons/sort-icon', () => {
  describe('renders correctly, with asc value:', () => {
    it('render correctly', () => {
      const tree = render(<SortIcon sort='asc' />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});

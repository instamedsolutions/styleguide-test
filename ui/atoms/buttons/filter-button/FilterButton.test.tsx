import React from 'react';

import render from '@ui/testing/render';

import FilterButton from './FilterButton';

describe('atoms/button/FilterButton', () => {
  it('Render correctly', () => {
    const tree = render(<FilterButton />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

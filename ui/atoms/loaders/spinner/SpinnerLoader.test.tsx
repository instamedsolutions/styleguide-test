import React from 'react';

import render from '@ui/testing/render';

import SpinnerLoader from './SpinnerLoader';

describe('ui/atoms/loaders/spinner/SpinnerLoader', () => {
  const props = {};

  it('renders correctly', () => {
    const tree = render(<SpinnerLoader {...props} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
}); 

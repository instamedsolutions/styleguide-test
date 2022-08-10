import React from 'react';

import render from '@ui/testing/render';

import LabelSkeleton from './LabelSkeleton';

describe('ui/atoms/loaders/label-skeleton/LabelSkeleton', () => {
  const props = {};

  it('renders correctly', () => {
    const tree = render(<LabelSkeleton {...props} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
}); 

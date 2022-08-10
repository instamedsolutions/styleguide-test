import React from 'react';

import render from '@ui/testing/render';

import Label from './Label';

describe('atoms/labels/Label', () => {
  it('renders correctly', () => {
    const tree = render(<Label>my label</Label>);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

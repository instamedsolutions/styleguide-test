import React from 'react';

import render from '@ui/testing/render';

import ErrorText from './ErrorText';

describe('atoms/texts/error/ErrorText', () => {
  it('renders correctly', () => {
    const tree = render(<ErrorText>this is a test</ErrorText>);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

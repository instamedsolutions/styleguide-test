import React from 'react';

import render from '@ui/testing/render';

import { ColorType, IconType } from '@ui/types';

import RoundedIcon from './RoundedIcon';

describe('ui/atoms/icons/rounded/RoundedIcon', () => {
  const props: { icon: IconType, color: ColorType } = {
    icon: 'check',
    color: 'primary'
  };

  it('renders correctly', () => {
    const tree = render(<RoundedIcon {...props} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

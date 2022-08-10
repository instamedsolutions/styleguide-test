import React from 'react';

import render from '@ui/testing/render';

import Overlay from './Overlay';

describe('ui/atoms/overlay/Overlay', () => {
  describe('renders correctly', () => {
    it('normal mode', () => {
      const tree = render(<Overlay />);
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('className correctly passed', () => {
      const tree = render(<Overlay className='bg-white' />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

});

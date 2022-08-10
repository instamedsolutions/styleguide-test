import React from 'react';

import render from '@ui/testing/render';

import Picto from './Picto';

describe('atoms/icons/picto', () => {
  describe('renders correctly, with checked value:', () => {
    it('render correctly', () => {
      const tree = render(<Picto icon='home' />);
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('classname props is correctly passed', () => {
      const tree = render(<Picto icon='home' className='bg-primary-500' />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});

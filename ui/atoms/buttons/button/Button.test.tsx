import React from 'react';

import { ColorType } from '@ui/types';
import render from '@ui/testing/render';

import { buttonTheme } from './utils';
import Button from './Button';

describe('atoms/button/Button', () => {
  describe('should render correctly', () => {
    it('in loading mode', () => {
      const tree = render(<Button loading> test </Button>);
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('with icon', () => {
      const tree = render(<Button icon='hospital'> test </Button>);
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('When has icon and saving props, no has icon', () => {
      const tree = render(<Button icon='hospital' saving={true}> test </Button>);
      expect(tree.toJSON()).toMatchSnapshot();
    });

    describe('with colors', () => {
      it.each(Object.keys(buttonTheme))('%s', color => {
        const tree = render(<Button color={color as ColorType}>test</Button>);
        expect(tree.toJSON()).toMatchSnapshot();
      });
    });
  });
});

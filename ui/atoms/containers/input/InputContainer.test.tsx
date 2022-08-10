import React from 'react';

import render from '@ui/testing/render';

import InputContainer from './InputContainer';

describe('ui/atoms/containers/input/InputContainer', () => {
  const props = {
    label: 'test',
    htmlFor: 'field-id'
  };

  describe('renders correctly', () => {
    it('by default', () => {
      const tree = render(
        <InputContainer {...props}>
           this is a test
        </InputContainer>
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('on loading', () => {
      const tree = render(
        <InputContainer {...props} loading>
           this is a test
        </InputContainer>
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});

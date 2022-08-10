import React from 'react';

import render from '@ui/testing/render';

import TextField from './TextField';

describe('atoms/fields/text/TextField', () => {
  const props = {
    label: 'label',
    placeholder: 'placeholder',
    name: 'name',
    value: 'value',
    icon: 'eye',
    type: 'text'
  };

  describe('renders correctly', () => {
    it('field', () => {
      const tree = render(<TextField {...props} />);

      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('skeleton', () => {
      const tree = render(<TextField {...props} loading />);

      expect(tree.toJSON()).toMatchSnapshot();
      expect(
        tree.root.findAllByType('input')
      ).toHaveLength(0);
    });
  });

  it('should handle icon click', () => {
    const onIconClick = jest.fn();
    const tree = render(
      <TextField
        {...props}
        onIconClick={onIconClick}
      />
    );

    tree.root.findByType('span').props.onClick();

    expect(onIconClick).toHaveBeenCalled();
  });
});

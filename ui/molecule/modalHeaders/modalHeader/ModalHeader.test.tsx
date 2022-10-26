import React from 'react';
import render from '@ui/testing/render';

import ModalHeader from './ModalHeader';

describe('molecule/modalHeaders/modalHeader', () => {
  it('render correctly with empty title', () => {
    const tree = render(<ModalHeader title='' onClose={() => null} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

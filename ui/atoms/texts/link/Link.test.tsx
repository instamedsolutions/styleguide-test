import React from 'react';

import render from '@ui/testing/render';

import Link from './Link';

const actionClasses = ['cursor-pointer', 'hover:underline'];

describe('atoms/texts/link/Link', () => {
  it('renders correctly', () => {
    const tree = render(
      <Link
        href='http://perdu.com'
        onClick={jest.fn()}
      >
        test
      </Link>
    );

    expect(tree.toJSON()).toMatchSnapshot();

    const { className } = tree.root.findByType('a').props;
    actionClasses.forEach(
      name => expect(className).toContain(name)
    );
  });

  it('renders correctly with isBlock', () => {
    const tree = render(
      <Link
        href='http://perdu.com'
        onClick={jest.fn()}
        isBlock
      >
        test
      </Link>
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  describe('onClick action', () => {
    describe('should not be fired when click is made with key:', () => {
      it.each([
        'shift',
        'ctrl',
        'meta',
        'alt'
      ])('%s', key => {
        const props = {
          onClick: jest.fn(),
          href: 'http://perdu.com'
        };
        const tree = render(<Link {...props} > test </Link>);

        const event = { [`${key}Key`]: true };
        tree.root.findByType('a').props.onClick(event);

        expect(props.onClick).not.toHaveBeenCalled();
      });
    });

    describe('should be fired when click is made', () => {
      it('with no key', () => {
        const props = {
          onClick: jest.fn(),
          href: 'http://perdu.com'
        };
        const tree = render(<Link {...props} > test </Link>);

        const event = {
          testKey: true,
          preventDefault: jest.fn()
        };
        tree.root.findByType('a').props.onClick(event);

        expect(props.onClick).toHaveBeenCalledWith(event, props.href);
        expect(event.preventDefault).toHaveBeenCalled();
      });

      it('with no special key', () => {
        const props = {
          onClick: jest.fn(),
          href: 'http://perdu.com'
        };
        const tree = render(<Link {...props} > test </Link>);

        const event = {
          testKey: true,
          preventDefault: jest.fn()
        };
        tree.root.findByType('a').props.onClick(event);

        expect(props.onClick).toHaveBeenCalledWith(event, props.href);
        expect(event.preventDefault).toHaveBeenCalled();
      });
    });
  });

  it('should not have cursor and decoration when onClick and href missing', () => {
    const tree = render(<Link>test</Link>);

    const { className } = tree.root.findByType('a').props;
    actionClasses.forEach(
      name => expect(className).not.toContain(name)
    );
  });
});

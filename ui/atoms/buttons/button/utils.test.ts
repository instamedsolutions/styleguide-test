import { ColorType, SizeType } from '@ui/types';

import {
  getButtonCls,
  sizes,
  buttonTheme
} from './utils';

describe('atoms/buttons/button/utils', () => {
  describe('getButtonCls', () => {
    it('return by default', () => {
      expect(getButtonCls()).toMatchSnapshot();
    });

    it('should add className', () => {
      const className = 'this-is-a-test';
      expect(getButtonCls({ className })).toContain(className);
    });

    describe('should override cursor when args', () => {
      it.each([
        { saving: true },
        { disabled: true },
      ])('%s', args => {
        expect(getButtonCls(args)).toContain('cursor-default');
      });
    });

    describe('size params implement right size', () => {
      it.each(Object.keys(sizes) as SizeType[])('%s', size => {
        expect(getButtonCls({ size })).toContain(sizes[size]);
      });
    });

    describe('themes should be applied', () => {
      it.each(Object.keys(buttonTheme) as ColorType[])('%s', color => {
        expect(getButtonCls({ color })).toContain(buttonTheme[color]);
      });
    });
  });
});

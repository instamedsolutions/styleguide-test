import cls from 'classnames';

import { KeyOfColorType, ColorType, SizeType } from '@ui/types';

export const buttonTheme: KeyOfColorType = {
  primary: 'text-white bg-primary-500 border-primary-500 hover:bg-primary-400 hover:border-primary-400',
  secondary: 'text-primary-500 bg-white border-gray-100 hover:bg-primary-100 hover:border-primary-100',
  light: 'text-gray-800 bg-white border-gray-100 hover:text-primary-500 hover:bg-primary-100 hover:border-primary-100'
};

export const sizes = {
  small: 'h-8',
  base: 'h-9',
  large: 'h-11'
};

export const disabledCls = 'text-gray-300 bg-gray-100 border-gray-100';

export type getButtonClsArgs = {
  color?: ColorType;
  size?: SizeType;
  disabled?: boolean;
  saving?: boolean;
  className?: string;
};

export const getButtonCls = ({
  color = 'secondary',
  size = 'base',
  saving,
  disabled,
  className
}: getButtonClsArgs = {}): string => cls(
  'relative text-center font-semibold transition-all text-sm',
  'rounded-lg border outline-none transition-colors flex items-center justify-center',
  disabled ? disabledCls : buttonTheme?.[color],
  sizes[size],
  { 'cursor-default': saving || disabled },
  className
);

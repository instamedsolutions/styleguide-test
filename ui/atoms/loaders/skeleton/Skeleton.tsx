import React, { FC } from 'react';
import cls from 'classnames';

import { SizeType } from '@ui/types';
import { sizes as buttonSizes } from '@ui/atoms/buttons/button/utils';

export type { SizeType };

export const sizes = {
  small: 'h-3',
  base: 'h-6',
  large: 'h-10'
};

export type SkeletonProps = {
  className?: string;
  size?: SizeType;
  button?: boolean;
  field?: boolean;
};

const Skeleton:FC<SkeletonProps> = ({
  className,
  size,
  button,
  field
}) => {
  if (!size && (button || field)) {
    // in button or field case we force default size
    size = 'base';
  }
  const sizesValues = button ? buttonSizes : sizes;

  return (
    <div className={cls(
      'animate-pulse bg-gray-100',
      {
        'rounded-lg': button || field,
        'rounded': !button && !field
      },
      size ? sizesValues[size] : '',
      className
    )} />
  );
};

export default Skeleton;

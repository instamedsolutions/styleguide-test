import React, { FC } from 'react';
import cls from 'classnames';

import { SpinnerIcon } from '@ui/atoms/icons/icons';

export type SpinnerLoaderProps = {
  className?: string;
};

const SpinnerLoader:FC<SpinnerLoaderProps> = ({ className }) => (
  <SpinnerIcon
    className={cls(
      'animate-spin mr-2 h-5 w-5',
      className
    )}
  />
);

export default SpinnerLoader;

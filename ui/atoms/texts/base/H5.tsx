import React, { FC } from 'react';
import cls from 'classnames';

import type { HProps } from './types';

export type H5Props = HProps;

const H5:FC<H5Props> = ({ children, className }) => (
  <h5 className={cls('text-base font-semibold text-gray-500', className)}>
    {children}
  </h5>
);

export default H5;

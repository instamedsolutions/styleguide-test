import React, { FC } from 'react';
import cls from 'classnames';

import type { HProps } from './types';

export type H4Props = HProps;

const H4:FC<H4Props> = ({ children, className }) => (
  <h4 className={cls('font-semibold text-lg text-gray-500', className)}>
    {children}
  </h4>
);

export default H4;

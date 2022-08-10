import React, { FC } from 'react';
import cls from 'classnames';

import type { HProps } from './types';

export type H2Props = HProps;

const H2:FC<H2Props> = ({ children, className }) => (
  <h2 className={cls('text-2xl font-bold', className)}>
    {children}
  </h2>
);

export default H2;

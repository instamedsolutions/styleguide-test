import React, { FC } from 'react';
import cls from 'classnames';

import type { HProps } from './types';

export type H1Props = HProps;

const H1:FC<H1Props> = ({ children, className }) => (
  <h1 className={cls('text-3xl font-bold', className)}>
    {children}
  </h1>
);

export default H1;

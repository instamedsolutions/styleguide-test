import React, { FC } from 'react';
import cls from 'classnames';

import type { HProps } from './types';

export type H3Props = HProps;

const H3:FC<H3Props> = ({ children, className }) => (
  <h3 className={cls('text-xl font-bold', className)}>
    {children}
  </h3>
);

export default H3;

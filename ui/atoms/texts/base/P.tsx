import React, { FC } from 'react';
import cls from 'classnames';

import type { HProps } from './types';

export type PProps = HProps;

const P:FC<PProps> = ({ children, className }) => (
  <p className={cls('text-xs text-gray-500', className)}>
    {children}
  </p>
);

export default P;

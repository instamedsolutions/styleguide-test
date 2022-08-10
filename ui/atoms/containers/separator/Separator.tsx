import React, { FC } from 'react';
import cls from 'classnames';

export type SeparatorProps = {
  className?: string;
};

const Separator:FC<SeparatorProps> = ({ className }) => (
  <div className={cls(
    'bg-gray-50 h-px w-full',
    className
  )} />
);

export default Separator;

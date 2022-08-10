import React, { FC } from 'react';
import cls from 'classnames';

export type LabelProps = {
  className?: string;
  children: React.ReactNode;
  error?: boolean;
  htmlFor?: string;
};

const Label:FC<LabelProps> = ({
  className,
  children,
  error,
  htmlFor,
  ...rest
}) => (
  <label
    {...rest}
    htmlFor={htmlFor}
    className={cls(
      'block text-xs font-semibold',
      {
        'text-gray-900': !error,
        'text-danger-500': error
      },
      className
    )}
  >
    {children}
  </label>
);

export default Label;

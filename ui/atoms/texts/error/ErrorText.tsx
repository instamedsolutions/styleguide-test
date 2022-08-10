import React, { FC } from 'react';
import cls from 'classnames';
import styled from 'styled-components';

import { ErrorIcon } from '@ui/atoms/icons/icons';

const Error = styled.div`
  svg {
    width: 15px;
    height: 15px;

    margin-top: 1px;
  }
`;

export type ErrorTextProps = {
  className?: string;
  children?: React.ReactNode;
};

const ErrorText:FC<ErrorTextProps> = ({ className, children, ...rest }) => (
  <Error
    {...rest}
    className={cls('flex text-xs text-danger-500', className)}
  >
    <ErrorIcon className='flex-shrink-0 mr-1 text-current' />
    {children}
  </Error>
);

export default ErrorText;

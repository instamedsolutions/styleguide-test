import React, { FC, MouseEvent } from 'react';
import cls from 'classnames';

import Picto from '@ui/atoms/icons/picto/Picto';

import { ColorType, SizeType } from '@ui/types';
import Skeleton from '@ui/atoms/loaders/skeleton/Skeleton';
import SpinnerLoader from '@ui/atoms/loaders/spinner/SpinnerLoader';

import { getButtonCls } from './utils';

export type { ColorType, SizeType };

export type ButtonProps = {
  type?: 'submit' | 'reset';
  className?: string;
  onClick?: (event: MouseEvent) => void;
  color?: ColorType;
  disabled?: boolean;
  size?: SizeType;
  loading?: boolean;
  saving?: boolean;
  icon?: string;
};

const Button:FC<ButtonProps> = ({
  className,
  children,
  color,
  onClick,
  loading,
  disabled,
  size,
  saving,
  icon,
  ...rest
}) => {
  if (loading) {
    return (
      <Skeleton
        className={className}
        size={size}
        button
      />
    );
  }

  return (
    <button
      {...rest}
      className={getButtonCls({
        size,
        saving,
        color,
        disabled,
        className
      })}
      onClick={onClick}
      disabled={saving || disabled}
    >
      <span className={cls(
        'relative mx-auto flex items-center gap-[10px]',
        {
          'pl-9 pr-4': saving,
          'px-4': !saving
        }
      )}>
        {
          saving
            ? <SpinnerLoader
              className={cls(
                'absolute top-1/2 left-2.5 -mt-2.5 transition-opacity'
              )}
            />
            : null
        }
        {
          !saving && icon
            ? <Picto icon={icon} />
            : null
        }
        <span>
          {children}
        </span>
      </span>
    </button>
  );
};

export default Button;

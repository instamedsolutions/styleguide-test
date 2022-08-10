import React, { FC } from 'react';
import cls from 'classnames';

import Icon from '@ui/atoms/icons/icon/Icon';
import { IconType, ColorType, KeyOfColorType } from '@ui/types';

export type RoundedIconProps = {
  className?: string;
  color: ColorType;
  icon: IconType;
};

export const roundedIconTheme: KeyOfColorType = {
  success: 'bg-success-100 text-success-500',
  danger: 'bg-danger-100 text-danger-500',
  primary: 'bg-primary-100 text-primary-500'
};

const RoundedIcon:FC<RoundedIconProps> = ({
  className,
  icon,
  color
}) => (
  <div className={cls(
    'rounded-full p-1 fill-current',
    roundedIconTheme?.[color] || '',
    className
  )}>
    <Icon icon={icon} className='w-4 h-4' />
  </div>
);

export default RoundedIcon;

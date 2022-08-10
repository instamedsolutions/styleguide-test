import React, { FC, MouseEvent } from 'react';
import cls from 'classnames';

import { IconType } from '@ui/types';
import { getIcon } from '@ui/atoms/icons/icon/utils';

export type PictoType = {
  icon?: IconType,
  onIconClick?: (event: MouseEvent) => void,
  className?: string
};


const defaultClassNames = [
  'text-sm',
  'text-gray-400',
  'hover:text-primary-500',
  'transition-colors',
  'cursor-pointer',
  'text-center'
];

const Picto: FC<PictoType> = ({ icon, onIconClick, className }) => {
  const Icon: React.ComponentType | undefined = getIcon(icon);
  if (!Icon) {
    return null;
  }


  if (!onIconClick) {
    return (
      <span className={className}>
        <Icon />
      </span>
    );
  }

  return (
    <span
      className={cls(defaultClassNames, className)}
      onClick={onIconClick}
      aria-hidden='true'
    >
      <Icon />
    </span>
  );
};

export default Picto;

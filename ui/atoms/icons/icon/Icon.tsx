import React, { FC } from 'react';

import { IconType } from '@ui/types';
import { getIcon } from './utils';

export type IconProps = {
  icon: IconType;
  className?: string;
};

const Icon:FC<IconProps> = ({ icon, ...rest }) => {
  const Component = getIcon(icon);

  if (!Component) {
    return null;
  }

  return <Component {...rest} />;
};

export default Icon;

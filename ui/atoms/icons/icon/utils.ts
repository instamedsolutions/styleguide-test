import React from 'react';

import icons, { IconType } from '@ui/atoms/icons/icons';

/**
 * check if icon exist and return it when it exist
 */
export const getIcon = (icon: IconType | string | undefined): React.ComponentType | undefined => {
  if (!icon || !icons?.[icon]) {
    return undefined;
  }

  return icons?.[icon] as React.ComponentType;
};

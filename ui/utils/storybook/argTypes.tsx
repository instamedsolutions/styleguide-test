import { colors, sizes } from '@ui/types';

import icons from '@ui/atoms/icons/icons';

export const icon = {
  options: Object.keys(icons),
  control: {
    type: 'select'
  }
};

export const color = {
  options: colors,
  control: {
    type: 'select'
  }
};

export const size = {
  options: sizes,
  control: {
    type: 'select'
  }
};

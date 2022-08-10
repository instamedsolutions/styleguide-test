import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Button, { ButtonProps } from '@ui/atoms/buttons/button/Button';

const FilterButton: FC<ButtonProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Button
      icon='filterIcon'
      size='small'
      color='secondary'
      {...props}
    >
      {t('ui.common.filter')}
    </Button>
  );
};

export default FilterButton;

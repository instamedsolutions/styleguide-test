import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { SortType } from "rsuite-table/src/@types/common";
import { SortAscIcon, SortDescIcon } from "@ui/atoms/icons/icons";

export type SortIconType = {
  sort: SortType
};


const SortIcon: FC<SortIconType> = ({ sort }) => {
  const { t } = useTranslation();
  const title = t(`ui.common.sort.${sort}`);

  return sort === 'asc' ?
    <SortAscIcon title={title} className='ml-2' /> :
    <SortDescIcon title={title} className='ml-2' />;
};

export default SortIcon;

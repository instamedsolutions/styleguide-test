import React, { FC } from 'react';

import Skeleton from '@ui/atoms/loaders/skeleton/Skeleton';

const LabelSkeleton:FC = () => (
  <Skeleton
    size='small'
    className='mt-1 mb-2 w-1/2 sm:w-1/4'
  />
);

export default LabelSkeleton;

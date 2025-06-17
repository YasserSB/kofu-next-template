'use client';

import React, { FC } from 'react';
import { Skeleton } from '../../atoms';
import { TChangeLocaleOption } from './ChangeLocaleOption.type';

export const ChangeLocaleOptionLoading: FC<TChangeLocaleOption> = () => {
  return (
    <div className="flex cursor-pointer items-center gap-3 py-1">
      <Skeleton width={28} height={17} />
      <Skeleton width={80} />
      <Skeleton width={14} height={14} />
    </div>
  );
};

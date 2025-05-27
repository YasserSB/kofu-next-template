import React, { FC } from 'react';
import { cn } from '@/app/_lib/utils';

import { ICard } from './Card.types';

export const Card: FC<ICard> = ({
  children,
  className,
  as = 'div',
  ...props
}) => {
  const Component = as;
  return (
    <Component
      className={cn(
        'flex rounded-xl bg-neutral-600 text-neutral-100',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

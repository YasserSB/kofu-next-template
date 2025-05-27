import React, { FC } from 'react';
import { cn } from '@/app/_lib/utils';

import { IFlex } from './Flex.types';

export const Flex: FC<IFlex> = ({
  children,
  className,
  as = 'div',
  justify = 'start',
  items = 'stretch',
  direction = 'row',
  reverseDirection = false,
  wrap = false,
  ...props
}) => {
  const Component = as;
  const flexDirection = (() => {
    if (direction === 'row') {
      return reverseDirection ? 'flex-row-reverse' : 'flex-row';
    }
    return reverseDirection ? 'flex-col-reverse' : 'flex-col';
  })();

  return (
    <Component
      className={cn(
        'flex',
        // Direction
        flexDirection,

        // Wrap
        wrap && 'flex-wrap',

        // Justify
        justify === 'center' && 'justify-center',
        justify === 'between' && 'justify-between',
        justify === 'around' && 'justify-around',
        justify === 'baseline' && 'justify-baseline',
        justify === 'evenly' && 'justify-evenly',
        justify === 'start' && 'justify-start',
        justify === 'end' && 'justify-end',

        // Items
        items === 'center' && 'items-center',
        items === 'start' && 'items-start',
        items === 'stretch' && 'items-stretch',
        items === 'baseline' && 'items-baseline',
        items === 'end' && 'items-end',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

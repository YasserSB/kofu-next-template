import React, { FC } from 'react';
import { cn } from '@/app/_lib/utils';
import { TSkeleton } from './Skeleton.type';

export const Skeleton: FC<TSkeleton> = ({
  width = 48,
  height = 16,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded bg-neutral-300',
        className,
      )}
      style={{ width, height }}
    >
      <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-neutral-100 to-transparent" />
    </div>
  );
};

import React, { forwardRef } from 'react';
import { TInput } from './Input.type';

export const Input = forwardRef<HTMLInputElement, TInput>(
  ({ ...props }, ref) => {
    return <input ref={ref} {...props} />;
  },
);

Input.displayName = 'Input';

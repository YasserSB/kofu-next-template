'use client';

import { FC, ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../queryClient';

type IReactQueryProvider = {
  children: ReactNode;
};

export const ReactQueryProvider: FC<IReactQueryProvider> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

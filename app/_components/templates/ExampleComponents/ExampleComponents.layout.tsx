import { FC } from 'react';
import { IExampleComponentsLayout } from './ExampleComponents.type';

export const ExampleComponentsLayout: FC<IExampleComponentsLayout> = ({
  children,
}) => (
  <section className="flex h-[100dvh] flex-col items-center justify-center gap-12 p-8">
    {children}
  </section>
);

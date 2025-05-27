import React, { FC } from 'react';
import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react';
import { cn } from '@/app/_lib/utils';
import { ITabs } from './CTabs.types';
import { Card } from '../../atoms';

export const CTabs: FC<ITabs> = ({ children, tabLabels, className }) => (
  <Card className="h-full w-full bg-transparent">
    <TabGroup className="flex h-full w-full flex-col">
      <TabList className="flex gap-1">
        {tabLabels.map((label) => (
          <Tab
            key={`tabLabels-${label}`}
            className="!cursor-pointer rounded-tl-xl rounded-tr-xl bg-neutral-600 px-4 py-1 focus:outline-0 data-selected:bg-neutral-800"
          >
            {label}
          </Tab>
        ))}
      </TabList>
      <TabPanels
        className={cn(
          'flex-1 *:h-full *:w-full *:flex-1 *:rounded-xl *:rounded-tl-none',
          className,
        )}
      >
        {children}
      </TabPanels>
    </TabGroup>
  </Card>
);

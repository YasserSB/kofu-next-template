'use client';

import { useCounter, usePokeList } from '@/app/_hooks';
import React, { FC } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Icons } from '../../atoms';

import { ExampleComponentsLoading } from './ExampleComponents.loading';
import { ExampleComponentsError } from './ExampleComponents.error';
import { ExampleComponentsEmpty } from './ExampleComponents.empty';
import { ExampleComponentsLayout } from './ExampleComponents.layout';

export const ExampleComponents: FC = () => {
  const { data: pokeList, isLoading, isError } = usePokeList();
  const {
    data: { value: counterValue },
    increment: incrementCounter,
    decrement: decrementCounter,
    incrementByAmount: incrementCounterByAmount,
  } = useCounter();

  // The scrollable element for your list
  const parentRef = React.useRef(null);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: pokeList?.count ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    enabled: !isLoading,
  });

  if (isLoading) return <ExampleComponentsLoading />;
  if (isError) return <ExampleComponentsError />;
  if ((pokeList?.results.length || 0) <= 0) return <ExampleComponentsEmpty />;

  return (
    <ExampleComponentsLayout>
      <Icons name="fileIcon" fill="tomato" size={64} />

      <div className="flex flex-col items-center justify-center gap-4">
        <p>~Counter~</p>
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => incrementCounterByAmount(-5)}
            className="cursor-pointer bg-cyan-500 px-3 py-1 text-sm text-white/90 hover:opacity-70 active:opacity-50"
          >
            -5
          </button>
          <button
            type="button"
            onClick={decrementCounter}
            className="cursor-pointer bg-cyan-500 px-3 py-1 text-sm text-white/90 hover:opacity-70 active:opacity-50"
          >
            -
          </button>
          <h2 className="text-base">{counterValue}</h2>
          <button
            type="button"
            onClick={incrementCounter}
            className="cursor-pointer bg-cyan-500 px-3 py-1 text-sm text-white/90 hover:opacity-70 active:opacity-50"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => incrementCounterByAmount(5)}
            className="cursor-pointer bg-cyan-500 px-3 py-1 text-sm text-white/90 hover:opacity-70 active:opacity-50"
          >
            +5
          </button>
        </div>
        <input />
      </div>

      <div ref={parentRef} className="relative w-full flex-1 overflow-auto">
        <h2 className="my-2 text-center">
          {isLoading ? 'Loading...' : `Total Pokemon: ${pokeList?.count}`}
        </h2>
        <ul
          className="flex flex-wrap"
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: 'relative',
            width: '100%',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((row) => {
            const item = pokeList?.results[row.index];
            if (!item) return null;

            return (
              <li
                key={`pokeList-${item.name}`}
                className="absolute top-0 left-0 mb-2 w-full"
                style={{
                  transform: `translateY(${row.start}px)`,
                }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  className="block w-full rounded bg-cyan-500 p-2 text-white/90"
                  rel="noreferrer"
                >
                  {item.name}
                  :
                  {item.url}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </ExampleComponentsLayout>
  );
};

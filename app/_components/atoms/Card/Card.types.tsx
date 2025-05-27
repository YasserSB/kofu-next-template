import { ElementType, HTMLAttributes } from 'react';

export interface ICard extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

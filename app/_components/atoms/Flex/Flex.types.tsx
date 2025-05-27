import { ElementType, HTMLAttributes } from 'react';

export interface IFlex extends HTMLAttributes<HTMLElement> {
  justify?:
    | 'center'
    | 'around'
    | 'baseline'
    | 'between'
    | 'evenly'
    | 'start'
    | 'end';
  items?: 'center' | 'baseline' | 'stretch' | 'start' | 'end';
  direction?: 'row' | 'col';
  reverseDirection?: boolean;
  as?: ElementType;
}

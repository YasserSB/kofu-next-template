'use client';

import { FC, SVGProps } from 'react';
import { iconMap } from '@/constants';
import { IIcons } from './Icons.type';

export const Icons: FC<IIcons> = ({ name, size = 24, ...props }) => {
  const Icon = iconMap[name] as FC<SVGProps<SVGSVGElement>>;

  return <Icon width={size} height={size} {...props} />;
};

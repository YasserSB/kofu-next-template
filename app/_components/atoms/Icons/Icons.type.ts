import { iconMap } from '@/app/_lib/constants';

export interface IIcons extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof iconMap;
  size?: number;
}

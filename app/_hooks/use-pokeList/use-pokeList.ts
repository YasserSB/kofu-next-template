import { getPokeList } from '@/app/_lib/services';
import { useQuery } from '@tanstack/react-query';

export const usePokeList = () =>
  useQuery({
    queryKey: ['pokeList'],
    queryFn: getPokeList,
  });

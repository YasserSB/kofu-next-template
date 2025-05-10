import { getPokeList } from '@/app/_lib/api';
import { useQuery } from '@tanstack/react-query';

export const usePokeList = () => {
  return useQuery({
    queryKey: ['pokeList'],
    queryFn: getPokeList,
  });
};

import { getPokeList } from '@/app/_lib/api';
import { useQuery } from '@tanstack/react-query';

export const usePokeList = () => useQuery({
  queryKey: ['pokeList'],
  queryFn: getPokeList,
});

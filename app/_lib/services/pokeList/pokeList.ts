import { axiosInstance } from '@/configs';

const URL = process.env.NEXT_PUBLIC_POKEAPI_URL;

export interface IgetPokeList {
  count: number;
  next?: string;
  previous: string;
  results: { name: string; url: string }[];
}

export const getPokeList = async (): Promise<IgetPokeList> =>
  new Promise((resolve, reject) => {
    axiosInstance({ method: 'GET', url: `${URL}/pokemon/?limit=2000` })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

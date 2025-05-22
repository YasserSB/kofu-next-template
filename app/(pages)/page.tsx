import { Metadata } from 'next';
import { ExampleComponents } from '@/modules/examples';

export const metadata: Metadata = {
  title: 'Kofu Next Template',
  description: 'NextJS CI/CD Template',
};

const Home = () => (
  <main>
    <ExampleComponents />
    {process.env.NEXT_PUBLIC_POKEAPI_URL}
  </main>
);

export default Home;

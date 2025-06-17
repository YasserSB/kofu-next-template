import { Skeleton } from '@/app/_components/atoms';
import { ChangeLocaleOption } from '@/app/_components/molecules';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kofu Next Template',
  description: 'NextJS CI/CD Template',
};

const Home = () => {
  return (
    <main className="px-10 py-4 text-neutral-900">
      <ChangeLocaleOption />
      <Skeleton />
    </main>
  );
};

export default Home;

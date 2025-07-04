import { Skeleton } from '@/app/_components/atoms';
import { ChangeLocaleOption } from '@/app/_components/molecules';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Kofu Next Template',
  description: 'NextJS CI/CD Template',
};

const Home = () => {
  const t = useTranslations();

  return (
    <main className="px-10 py-4 text-neutral-900">
      <h1 className="mb-6">{t('landing-page.title')}</h1>
      <ChangeLocaleOption />
      <Skeleton />
    </main>
  );
};

export default Home;

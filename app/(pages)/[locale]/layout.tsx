import { ReactNode } from 'react';
import type { NextPage } from 'next';
import '@/assets/styles/global.css';
import { inter } from '@/fonts';
import { cn } from '@/utils';
import { ReactQueryProvider, StoreProvider } from '@/configs';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { nextIntlRouting } from '@/app/_lib/configs/i18n';
import { notFound } from 'next/navigation';

type TRootLayout = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

const RootLayout: NextPage<TRootLayout> = async ({ children, params }) => {
  const { locale } = await params;
  if (!hasLocale(nextIntlRouting.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={cn('antialiased', inter.className)}>
        <NextIntlClientProvider>
          <ReactQueryProvider>
            <StoreProvider>{children}</StoreProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

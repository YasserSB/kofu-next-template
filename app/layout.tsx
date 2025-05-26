import { ReactNode } from 'react';
import type { NextPage } from 'next';
import '@/assets/styles/global.css';
import { inter } from '@/fonts';
import { cn } from '@/utils';
import { ReactQueryProvider, StoreProvider } from '@/configs';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

type TRootLayout = Readonly<{
  children: ReactNode;
}>;

const RootLayout: NextPage<TRootLayout> = async ({ children }) => {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={cn('antialiased', inter.variable)}>
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

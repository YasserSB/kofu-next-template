'use server';

import { getRequestConfig } from 'next-intl/server';

export const requestConfig = getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'en';

  return {
    locale,
    messages: (await import(`../../../../_assets/locales/${locale}.json`))
      .default,
  };
});

export default requestConfig;

import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { nextIntlRouting } from '../nextIntlRouting';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(nextIntlRouting.locales, requested)
    ? requested
    : nextIntlRouting.defaultLocale;

  return {
    locale,
    messages: (await import(`../../../../_assets/locales/${locale}.json`))
      .default,
  };
});

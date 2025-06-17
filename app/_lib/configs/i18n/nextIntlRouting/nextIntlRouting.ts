import { defineRouting } from 'next-intl/routing';

export const nextIntlRouting = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'id'],

  // Used when no locale matches
  defaultLocale: 'en',
});

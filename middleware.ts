import createMiddleware from 'next-intl/middleware';
import { nextIntlRouting } from './app/_lib/configs/i18n';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const cookieLocale =
    request.headers.get('cookie')?.match(/locale=(\w{2})/)?.[1] ?? 'en';

  const isMissingLocale = !/^\/(en|id)(\/|$)/.test(pathname);

  if (cookieLocale && isMissingLocale) {
    const response = NextResponse.redirect(
      new URL(`/${cookieLocale}${pathname}`, request.url),
    );
    response.cookies.set({
      name: 'locale',
      value: cookieLocale,
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  return createMiddleware(nextIntlRouting)(request);
}

export { middleware as default };

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};

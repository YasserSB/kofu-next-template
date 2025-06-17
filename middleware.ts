import createMiddleware from 'next-intl/middleware';
import { nextIntlRouting } from './app/_lib/configs/i18n';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const cookieLocale = request.headers
    .get('cookie')
    ?.match(/locale=(\w{2})/)?.[1];

  const isMissingLocale = !/^\/(en|id)(\/|$)/.test(pathname);

  if (cookieLocale && isMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${cookieLocale}${pathname}`, request.url),
    );
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

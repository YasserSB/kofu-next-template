import { createNavigation } from 'next-intl/navigation';
import { nextIntlRouting } from '../nextIntlRouting';

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(nextIntlRouting);

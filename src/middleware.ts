import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  // 1. Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    // Basic parser for accept-language header: e.g. "fr-CH, fr;q=0.9, en;q=0.8, *;q=0.5"
    const preferredLocales = acceptLanguage
      .split(",")
      .map((lang) => {
        const [locale] = lang.split(";");
        return locale.trim().split("-")[0].toLowerCase();
      })
      .filter((locale) => locales.includes(locale));

    if (preferredLocales.length > 0) {
      return preferredLocales[0];
    }
  }

  // 2. Fallback to default
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale in the pathname
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // Redirect to /[locale]/...
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and api routes
    // Skip static assets under public/
    "/((?!api|_next/static|_next/image|favicon.ico|next.svg|vercel.svg|.*\\..*$).*)",
  ],
};

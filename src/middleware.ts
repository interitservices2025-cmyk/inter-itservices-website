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
  const matchedLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!matchedLocale) {
    // Redirect if there is no locale in the pathname
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // Extract the sub-path after /[locale]
  const subPath = pathname.slice(`/${matchedLocale}`.length);

  // Redirect legacy or non-commercialized offering routes
  if (
    subPath === "/services/odoo" ||
    subPath === "/services/odoo-implementation" ||
    subPath === "/solutions"
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${matchedLocale}/solutions/odoo`;
    return NextResponse.redirect(redirectUrl, 308);
  }

  // Block direct access to App Simulation Profil until officially launched, or any discontinued offerings
  if (
    subPath === "/services" ||
    subPath.startsWith("/services/") ||
    subPath === "/training" ||
    subPath.startsWith("/training/") ||
    subPath === "/ai-solutions" ||
    subPath.startsWith("/ai-solutions/") ||
    subPath === "/products" ||
    subPath.startsWith("/products/") ||
    subPath === "/portfolio" ||
    subPath.startsWith("/portfolio/") ||
    subPath === "/solutions/app-simulation-profil" ||
    subPath.startsWith("/solutions/app-simulation-profil/")
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${matchedLocale}`;
    redirectUrl.hash = "solutions";
    return NextResponse.redirect(redirectUrl, 308);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and api routes
    // Skip static assets under public/
    "/((?!api|_next/static|_next/image|favicon.ico|next.svg|vercel.svg|.*\\..*$).*)",
  ],
};

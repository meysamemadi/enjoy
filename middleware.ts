import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export default auth(async (request) => {
  const { nextUrl } = request;
  const locale = getLocale(request);

  const pathname = nextUrl.pathname;

  const isLoggedIn = !!request.auth;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one

  // Ignore requests to /api and static assets in public directory
  if (pathname.startsWith("/api/")) {
    return NextResponse.next(); // Pass through these requests
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  if (nextUrl.pathname.startsWith(`/${locale}/panel`) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }


  if (
    (nextUrl.pathname.startsWith(`/${locale}/auth/signup`) && isLoggedIn) ||
    (nextUrl.pathname.startsWith(`/${locale}/auth/login`) && isLoggedIn)
  ) {

     return NextResponse.redirect(new URL(`/${locale}/panel`, nextUrl));
  }
});

// export const config = {
//   // Matcher ignoring `/_next/` and `/api/`
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// export default auth(async (req) => {
//   const { nextUrl } = req;

//   const isLoggedIn = !!req.auth;

//   console.log("status : ",isLoggedIn)

// });

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

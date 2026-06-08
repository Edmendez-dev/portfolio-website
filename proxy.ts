import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const handleI18nRoute = createMiddleware({
  locales: ["en", "es"],
  defaultLocale: "es",
  localeDetection: true,
  localePrefix: "as-needed",
});

export default function middleware(request: NextRequest) {
  return handleI18nRoute(request);
}

export const config = {
  matcher: ["/", "/(en|es)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};

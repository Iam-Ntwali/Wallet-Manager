// export { auth as middleware } from "@/auth";

import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isProtected = protectedRoutes.some(
    (route) => request.nextUrl.pathname.startsWith(route) // Check if the current route is protected
  );

  if (isProtected && !session) {
    // If the route is protected and the user is not authenticated yet, redirect to the sign-in page
    const absoluteURL = new URL("/auth/sign-in", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Match all routes except API and static files
};

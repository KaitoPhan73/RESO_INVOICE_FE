import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/dashboard/", "/company/"];
const authPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;
  const userRaw = request.cookies.get("user")?.value ?? " ";

  let user;
  try {
    user = JSON.parse(userRaw);
  } catch (error) {
    console.error("Error parsing user cookie:", error);
    user = null;
  }

  // If the user is not logged in, do not allow access to private paths
  if (privatePaths.some((path) => pathname.startsWith(path)) && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is logged in, do not allow access to login/register pages
  if (authPaths.some((path) => pathname.startsWith(path)) && accessToken) {
    if (user?.role === 0) {
      return NextResponse.redirect(new URL("/dashboard/brands", request.url));
    } else if (user?.role === 1) {
      return NextResponse.redirect(new URL("/dashboard/partners", request.url));
    } else if (user?.role === 2) {
      return NextResponse.redirect(
        new URL("/dashboard/organization", request.url)
      );
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*", "/company/:path*"],
};

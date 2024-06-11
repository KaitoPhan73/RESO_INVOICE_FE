import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import PATHS from "./route/paths";

const privatePaths = ["/"];
const authPaths = ["/login"];

export function middleware(request: NextRequest) {
  const { PATH_DASHBOARD, PATH_USER, PATH_ORGANIZATION, PATH_BRAND, PATH_ADMINSYSTEM } = PATHS;
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

  if (!accessToken && privatePaths.some(path => pathname.startsWith(path)) && !authPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (authPaths.some((path) => pathname.startsWith(path)) && accessToken) {
    if (user?.role === 0) {
      return NextResponse.redirect(new URL(PATH_BRAND.organizations, request.url));
    } else if (user?.role === 1) {
      console.log("khoaaaaa", request.url);
      return NextResponse.redirect(new URL(PATH_ADMINSYSTEM.brands, request.url));
    } else if (user?.role === 2) {
      return NextResponse.redirect(
        new URL(PATH_ORGANIZATION.invoices, request.url)
      );
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*", "/company/:path*"],
};

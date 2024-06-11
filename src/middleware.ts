import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import PATHS from "./route/paths";

const privatePaths = ["/"];
const authPaths = ["/login"];

export function middleware(request: NextRequest) {
  const { PATH_ORGANIZATION, PATH_BRAND, PATH_ADMINSYSTEM } = PATHS;
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

  if (
    !accessToken &&
    privatePaths.some((path) => pathname.startsWith(path)) &&
    !authPaths.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (authPaths.some((path) => pathname.startsWith(path)) && accessToken) {
    let destinationUrl;

    if (user?.role === 0) {
      destinationUrl = PATH_BRAND.organizations;
    } else if (user?.role === 1) {
      destinationUrl = PATH_ADMINSYSTEM.brands;
    } else if (user?.role === 2) {
      destinationUrl = PATH_ORGANIZATION.invoices;
    }
    if (destinationUrl) {
      return NextResponse.redirect(new URL(destinationUrl, request.url));
    }
  }

  if (user) {
    if (user.role === 0 && pathname.startsWith(PATH_ADMINSYSTEM.brands)) {
      return NextResponse.redirect(
        new URL(PATH_BRAND.organizations, request.url)
      );
    }
    if (user.role === 1 && pathname.startsWith(PATH_ORGANIZATION.invoices)) {
      return NextResponse.redirect(
        new URL(PATH_ADMINSYSTEM.brands, request.url)
      );
    }
    if (user.role === 2 && pathname.startsWith(PATH_BRAND.organizations)) {
      return NextResponse.redirect(
        new URL(PATH_ORGANIZATION.invoices, request.url)
      );
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*"],
};

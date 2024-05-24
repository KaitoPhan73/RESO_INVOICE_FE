import { NextRequest, NextResponse } from "next/server";
// import { getToken } from '@/utils/auth'

export function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};

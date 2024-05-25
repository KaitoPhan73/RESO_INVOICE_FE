// import { NextRequest, NextResponse } from 'next/server'
// // import { getToken } from '@/utils/auth'
// export function middleware(req: NextRequest) {
//   const token = getToken()

//   if (token) {
//     req.headers.set('Authorization', `Bearer ${token}`)
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: '/:path*',
// }
// middleware.ts

import { NextRequest, NextResponse } from "next/server";

const isLoggedIn: boolean = true;

export function middleware(request: NextRequest) {
  const allowedPages = ["login"];
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (allowedPages.includes(request.url)) {
    return NextResponse.next();
  }

  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect("login");
}

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next();
  console.log(`header hit: ${Date.now()}`);
  response.headers.set("x-fah-middleware", "true");
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/static",
};

// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request) {
  if (!request.cookies.get("auth")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

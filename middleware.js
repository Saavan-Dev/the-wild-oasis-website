//following is for reference DO NOT REMOVE!
// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/app/_lib/auth";
export const middleware = auth;
//matcher concept is as follows
export const config = {
  matcher: ["/account"],
};

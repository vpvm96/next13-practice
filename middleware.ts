import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
  console.log("미들웨어가 실행되고 있으니까 체크해보세요!")
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 - 경로를 리다이렉팅합니다.")
    return NextResponse.redirect(new URL("/products", request.url))
  }
}

export const config = {
  matcher: ["/products/:path*"],
}

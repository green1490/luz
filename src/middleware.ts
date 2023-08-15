import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.cookies.has("userData") == false) {
    const { pathname } = request.nextUrl
    
    if (!['/login','/registration'].includes(pathname)) {
      return NextResponse.redirect(new URL('/login', request.url))
    } else {
      return NextResponse.next()
    }
   }
}

export const config = {
  matcher: [
    '/', '/login', '/registration',
  ],
}
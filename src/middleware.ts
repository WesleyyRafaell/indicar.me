import { getUrl } from '@/lib/get-url';
import { NextRequest, NextResponse } from 'next/server';

export default function middleware (request: NextRequest) {
  const token = request.cookies.get('__Secure-authjs.session-token');
  const { pathname } = request.nextUrl;

  if (pathname === '/auth' && token) {
    return NextResponse.redirect(new URL(getUrl('/system')));
  }

  if (pathname.includes('/system') && !token) {
    return NextResponse.redirect(new URL(getUrl('/auth/signin')));
  }
}

export const config = {
  matcher: [ '/((?!api|_next/static|_next/image|favicon.ico).*)' ],
};

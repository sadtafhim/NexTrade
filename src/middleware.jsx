import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = request.cookies.get('user_token');
    const { pathname } = request.nextUrl;

    // 1. If user is NOT logged in and tries to access /add-item
    if (!token && pathname.startsWith('/add-item')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // 2. If user IS logged in and tries to access /login
    if (token && pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/items', request.url));
    }

    return NextResponse.next();
}

// Only run middleware on these specific routes
export const config = {
    matcher: ['/add-item', '/login'],
};
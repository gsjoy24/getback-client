import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { authKey } from './constants/authKey';

export function middleware(request: NextRequest) {
	const isUserLoggedIn = request.cookies.get('accessToken');
	console.log({ isUserLoggedIn });

	if (!isUserLoggedIn) {
		const loginUrl = new URL('/login', request.url);
		loginUrl.searchParams.set('redirect', request.nextUrl.pathname + request.nextUrl.search);
		return NextResponse.redirect(loginUrl);
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/report-lost-item', '/report-found-item']
};

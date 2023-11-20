import { NextRequest, NextResponse } from 'next/server';
 
export function middleware(req: NextRequest) {
	const response = NextResponse.next();
	response.cookies.set('theme', 'clear');
	
}
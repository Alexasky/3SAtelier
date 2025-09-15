import { NextResponse } from 'next/server';
import { title } from 'process';

export async function GET(req: Request) {
	try {
		const url = new URL(req.url);
		const slug = url.searchParams.get("slug");
		const apiUrl = `http://curtains.com/wp-json/wp/v2/pages?slug=${slug}`;
		const apiRes = await fetch(apiUrl);
		if(!apiRes.ok) {
			return new Response('Failed to fetch pages', { status: 500 } );
		}
		const page = await apiRes.json()
		return NextResponse.json(page);
	}catch(error: unknown){
		return new Response('Server error', { status: 500 } );
	}
}

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
		const url = new URL(req.url);
  	const slug = url.searchParams.get("slug");
    let apiUrl = "http://curtains.com/wp-json/wp/v2/posts";
		if (slug) apiUrl += `?slug=${slug}`;

		const apiRes = await fetch(apiUrl);
    
    if (!apiRes.ok) {
      return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }

    const posts = await apiRes.json();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

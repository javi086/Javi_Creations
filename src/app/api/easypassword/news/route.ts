import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export async function GET() {
  try {
    const res = await fetch('https://www.wired.com/feed/category/security/latest/rss');
    if (!res.ok) return NextResponse.json([], { status: 200 });

    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false });
    const parsed = parser.parse(xml);

    // RSS layout: parsed.rss.channel.item (array) — fall back to atom feed structures
    const items = parsed?.rss?.channel?.item ?? parsed?.feed?.entry ?? [];
    const list = Array.isArray(items) ? items : [items];

    const topStories = list.slice(0, 5).map((item: any) => ({
      title: item.title?.['#text'] ?? item.title ?? '',
      link: item.link?.['@_href'] ?? item.link ?? (item.link?.['#text'] ?? ''),
      date: item.pubDate ?? item.published ?? item.updated ?? ''
    }));

    return NextResponse.json(topStories);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('RSS Error:', message);
    return NextResponse.json([], { status: 200 });
  }
}

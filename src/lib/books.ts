// Helpers for reading books and themes in pages and components.
import { getCollection, type CollectionEntry } from 'astro:content';
import themes from '../data/themes.json';

export type Book = CollectionEntry<'books'>;
export type Tags = Book['data']['tags'];
export { themes };

const STATUS_ORDER = { published: 0, verified: 1, drafted: 2, selected: 3, candidate: 4 } as const;

/** Verified and published books get public pages and count on the scoreboard. */
export const isLive = (book: Book) =>
  book.data.status === 'verified' || book.data.status === 'published';

/** Live books: published first, then by list number, then title. */
export async function getLiveBooks(): Promise<Book[]> {
  const books = await getCollection('books', isLive);
  return books.sort(
    (a, b) =>
      STATUS_ORDER[a.data.status] - STATUS_ORDER[b.data.status] ||
      (a.data.number ?? 999) - (b.data.number ?? 999) ||
      a.data.title.localeCompare(b.data.title),
  );
}

export const themeName = (slug: string) => themes.find((t) => t.slug === slug)?.name ?? slug;

/** The bold first line of "## At a glance". */
export function coreIdea(body = ''): string {
  const m = body.match(/##\s+At a glance\s*\n+\s*\*\*([\s\S]+?)\*\*/);
  return m ? m[1].trim() : '';
}

/** Plain-text paragraphs of a "## " section, with markdown emphasis removed. */
export function sectionParagraphs(body = '', heading: string): string[] {
  const start = body.indexOf(`## ${heading}`);
  if (start === -1) return [];
  const rest = body.slice(start).split('\n').slice(1).join('\n');
  const end = rest.search(/^## /m);
  return (end === -1 ? rest : rest.slice(0, end))
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\*+/g, '').trim())
    .filter(Boolean);
}

export function verdictStats(tags: Tags) {
  const total = tags.transcends + tags.evolves + tags.expires;
  const pct = (n: number) => (total ? Math.round((n / total) * 100) : 0);
  return {
    total,
    pct: { transcends: pct(tags.transcends), evolves: pct(tags.evolves), expires: pct(tags.expires) },
  };
}

export function sumTags(books: Book[]): Tags {
  return books.reduce(
    (acc, b) => ({
      transcends: acc.transcends + b.data.tags.transcends,
      evolves: acc.evolves + b.data.tags.evolves,
      expires: acc.expires + b.data.tags.expires,
    }),
    { transcends: 0, evolves: 0, expires: 0 },
  );
}

/** Reader zero status line, e.g. "Not read yet" or "Read Oct 20, 2026 · 4/5". */
export function readerStatus(book: Book): string {
  const { joe_read, joe_rating } = book.data;
  if (!joe_read) return 'Not read yet';
  const date = joe_read.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
  return joe_rating == null ? `Read ${date}` : `Read ${date} · ${joe_rating}/5`;
}

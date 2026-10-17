// Builds an internal link that respects the site's base path (/365-books).
// url('/books/wardley-maps/') -> '/365-books/books/wardley-maps/'
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

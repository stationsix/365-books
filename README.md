# 365 Books

AI-written summaries of 365 essential business books, each key concept tagged Transcends, Evolves or Expires for the AI era.

Live site: https://stationsix.github.io/365-books/

Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at http://localhost:4321/365-books/ |
| `npm run build` | Build the site into `dist/`. Fails if any book breaks the schema. |
| `npm run preview` | Serve the built `dist/` locally |

## Where things live

| Path | What it is |
| --- | --- |
| `src/content/books/` | One markdown file per book. The file name is the URL slug. |
| `src/content.config.ts` | The books schema (front matter rules) |
| `src/data/themes.json` | The 12 themes, slugs and target counts |
| `src/plugins/rehype-book.mjs` | Turns summary markdown into the page design (sections, concept rows, prompt blocks, scorecard) |
| `src/pages/` | Routes: home, `books/[slug]`, `how-its-made`, `reader-zero` |
| `src/styles/` | Global tokens and the book page styles |
| `.github/workflows/deploy.yml` | Build and deploy on every push to `main` |

## Adding a book

Every summary follows `00_context/2026-10-16_365books_summary-template_v02.md` in the Drive project folder.

1. Copy the approved summary into `src/content/books/<slug>.md`.
2. Run `npm run build`. It fails, naming the file, if:
   - the front matter breaks the schema in `src/content.config.ts`
   - a fixed section heading is missing
   - there aren't 5 to 7 key concepts, or the `tags` counts don't match the concept headings
3. Only books with status `verified` or `published` get a public page.

If you change `src/plugins/rehype-book.mjs`, delete `node_modules/.astro` before building, because Astro caches rendered markdown.

Planning, drafts and verification notes live in the 365_Books_Project Google Drive folder, not here.

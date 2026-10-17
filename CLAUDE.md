# 365 Books

A public, read-only website of AI-written summaries of 365 essential business books, in 12 themes released in batches (no calendar dates). The angle: AI transparency, plus an AI-era lens that tags every key concept Transcends, Evolves or Expires. A hobby and showcase for Joe, meant to stretch his skills rather than become a business.

Live: https://stationsix.github.io/365-books/ (deploys on every push to `main`).

## Where things live
- `src/content/books/<slug>.md`: the summaries, one file per book. The single source of truth.
- `planning/`: decisions log, design system, summary template, selection batches, verification notes. Astro ignores it.
- `README.md`: commands and how the build checks each book.
- Working brief (claude.ai doc): https://claude.ai/code/artifact/048a5b86-5c86-4752-9b3d-d8ef7d41ff9b

## What matters
- Summaries follow `planning/summary-template.md`. Book sections are third person in the book's flavor, never the author speaking. The AI-era lens is one labeled house voice. Never guess an author's view on AI.
- At most 2 short quotes per summary. A book counts as verified only after a separate review pass that didn't see the drafting checks its claims; record what it found in `planning/verification/`.
- Book selection uses the persona panel and rubric described in the batch files; record real decisions in `planning/decisions-log.md`. Each batch also names up to 3 honorable mentions (crowd favorite or specialist's pick; rule in the decisions log), carded in `src/data/honorable-mentions.json`.
- No em dashes, no stock AI phrasing.
- Files keep stable names and are edited in place; git is the history. Only point-in-time records (verification notes) carry a date.
- Never push without Joe's yes: a push publishes the site.
- Joe is new to Astro and GitHub Actions: explain unfamiliar tooling as you go.

## Next
- Batch 1 (Strategy): summarize the remaining 27 picks in rank order.
- Batch 2 (Innovation and Technology): selection approved. Ranks 1 to 3 verified (Innovator's Dilemma, Mythical Man-Month, Design of Everyday Things); continue in rank order.
- Batch 3 (Mindset for Builders): selection drafted, awaiting Joe's approval. Ranks 1 to 3 verified (Mindset, Flow, Man's Search for Meaning; Frankl is medium confidence, check two passages against a print copy).
- Batch 4 selection: next theme to be chosen (Management, Teams and Culture has the most books routed in).
- Site: progress logging via GitHub Issue form + Action, Pagefind search, Amazon affiliate tag (after ~20 summaries), custom domain once there's content.

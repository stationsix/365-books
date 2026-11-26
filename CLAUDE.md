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
- Translated classics follow a public-domain translation whenever one exists, so every claim and quote can be checked against the full text.
- At most 2 short quotes per summary. A book counts as verified only after a separate review pass that didn't see the drafting checks its claims; record what it found in `planning/verification/`.
- Book selection uses the persona panel and rubric described in the batch files; record real decisions in `planning/decisions-log.md`. Each batch also names up to 3 honorable mentions (crowd favorite or specialist's pick; rule in the decisions log), carded in `src/data/honorable-mentions.json`.
- No em dashes, no stock AI phrasing.
- Files keep stable names and are edited in place; git is the history. Only point-in-time records (verification notes) carry a date.
- Never push to or merge into `main` without Joe's yes: that publishes the site. Pushing a work branch and opening a pull request is fine; leave the merge to Joe.
- Unattended runs: work through the Next list in order, stop at anything that is Joe's call (selection approvals), and list those open questions at the top of the PR description. Keep the Next list current in the same PR.
- Joe has no print copies of the books. Never leave a claim for him to check against the book: confirm it from another excerpt or reliable source, or cut or soften it, before the PR goes up.
- Joe is new to Astro and GitHub Actions: explain unfamiliar tooling as you go.

## Next
- Batch 1 (Strategy): ranks 1 to 25 verified plus pilots at 26 and 29; summarize the remaining 3 picks in rank order: rank 27 (The Strategist), 28 (Hidden Champions) and 30 (The Rise and Fall of Strategic Planning). That completes the batch.
- Batch 2 (Innovation and Technology): selection approved. Ranks 1 to 3 verified (Innovator's Dilemma, Mythical Man-Month, Design of Everyday Things); continue in rank order.
- Batch 3 (Mindset for Builders): selection approved. Ranks 1 to 3 verified (Mindset, Flow, Man's Search for Meaning; Frankl is medium confidence: two passages still need confirming from other excerpts, or cutting, since Joe has no print copy).
- Batch 4 (Management, Teams and Culture): selection approved (Work Rules! replaced The Practice of Management; The Effective Executive is Drucker's pick for Habits). Ranks 1 to 3 verified (High Output Management, The Fearless Organization, Radical Candor).
- Later batches: Claude chooses the theme order and drafts each selection in time to keep summaries flowing. Joe approves each selection before its books are summarized.
- Accounts, hosting and brand (exploring, Joe deciding): reader accounts via Supabase, move to Cloudflare with a private repo and a custom domain, possible new brand name. Read `planning/accounts-hosting-brand.md` first; its open questions are Joe's call.
- Site: progress logging via GitHub Issue form + Action, Pagefind search, Amazon affiliate tag (after ~20 summaries), custom domain once there's content.

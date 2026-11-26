# Accounts, hosting and brand: working notes

Status: exploring. Nothing bought, built or switched yet. Joe is thinking it over (2026-11-26). Nothing here is in the decisions log yet; log each item there once Joe confirms it.

## Why this came up

Joe wants testers (about 20 to start) to have accounts and track the books they've "read". For users that means read the summary and tried the AI prompts, not the full book. He wants to keep costs low while experimenting.

Today the Reader zero page and the home progress grid read `joe_read`, `joe_rating` and `joe_note` from each book's front matter. All 21 are null, and the planned GitHub Issue form that would update them was never built, so the only way to log a read is to edit the file. Also, the progress grid counts `status: published`, but every live book is `verified`, so it shows 0 published. Small fix to make.

Keep Reader zero (Joe reading full books) separate from user progress (summary plus prompts).

## Leanings so far

| Area | Leaning | Cost |
|---|---|---|
| Accounts and progress | Supabase free plan: Google sign-in only, a progress table protected by row-level security, invite-only during the beta | $0 |
| Email sign-in (magic links) | Later, once there's a domain to send from (the built-in Supabase email only reaches the project team, 2 per hour) | $0 at this size |
| Hosting | Move off GitHub Pages to Cloudflare, which builds from a private repo and gives preview links | $0 |
| Repo | Make it private once the new hosting is live | $0 |
| Domain | Buy one now on Cloudflare Registrar (sold at cost) | about $10 to $15/yr for .com; .ai about $70 to $90/yr, usually 2-year minimum |
| Brand | Exploring a new name; notes kept privately (see Brand below) | |

Why move off GitHub Pages: its docs say Pages isn't for running a SaaS or a commercial site, or for "sensitive transactions like sending passwords". It also can't send security headers. Accounts plus the planned Amazon tag push past that.

### Options considered for accounts

- **Supabase (chosen leaning).** Free: 50,000 monthly users, 500 MB database. Catches: free projects pause after 7 days of low activity (restorable for a year), no backups on free, Pro is $25/mo.
- **Azure Static Web Apps.** Free plan only offers GitHub and Microsoft sign-in, with up to 25 invited users in custom roles. Google needs the Standard plan: $9 per app per month in US regions (Azure retail price list), bandwidth over 100 GB at about $0.20/GB, Functions and Table Storage near $0 at this size. Turning on custom sign-in disables the built-in GitHub and Microsoft providers unless you register them yourself.
- **Cloudflare Workers + D1.** Free, but more login code to write and secure ourselves.
- **No accounts (browser-only "mark as done").** Free and no security risk, but tied to one device and Joe can't see testers' progress. Possible stepping stone.

### Security basics (whatever we pick)

- No passwords: Google sign-in now, magic links later.
- Row-level security on every table, with a test proving one user can't read another's rows. The Supabase browser key is public by design.
- Admin keys never go in the repo.
- Collect only email plus progress. Testers can delete their account and data.
- Short privacy page before testers sign up (especially any in the EU).

### Side effects of a private repo

- "Report a correction" on each book page opens a GitHub issue; the public can't do that on a private repo. Replace it with a per-book feedback form (could save to Supabase and double as tester feedback).
- The footer "Source on GitHub" link would 404. Remove it.
- Everything pushed since October stayed public until now; going private hides it from here on but can't recall copies.
- Old stationsix.github.io links stop working once Pages is off.

### Migration order (so the site never goes down)

1. Joe buys the domain on Cloudflare.
2. Joe connects Cloudflare to the GitHub repo. Claude adds the config and moves the site from `/365-books/` to the domain root (`astro.config.mjs` `site` and `base`); Joe checks it on localhost.
3. Once the domain is live, Joe makes the repo private (Pages stops).
4. Claude swaps the correction link for a feedback form, then builds Google sign-in, a "Mark as done" button on each book and a "My progress" page.

Each step goes through a pull request Joe merges.

## Brand

Brand name ideas, the domain shortlist and the positioning notes are kept privately in Joe's Google Drive ("365 Books brand notes (private).md") until a domain is bought, since this repo is public. Ask Joe for them if a run needs them; don't recreate the shortlist here.

## Open questions for Joe

1. Brand: final name and .ai or .com (see the private brand notes).
2. Confirm the stack: Supabase + Google sign-in + Cloudflare hosting + private repo.
3. What does a user get from logging a book: a checklist, streaks, ratings, notes?
4. Is "tried the prompts" a checkbox, or recorded automatically when Copy is clicked?
5. Is per-book feedback from testers the bigger goal? It may matter more than progress tracking.
6. Do all testers have Google accounts?

## Decisions to log once confirmed

- Reader logins reverse the 2026-10-16 entry "no reader logins in v1".
- Hosting moves from GitHub Pages to Cloudflare; the repo goes private.
- Custom domain bought now instead of "wait until there is content".
- Brand name, if it changes from 365 Books.

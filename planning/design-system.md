# 365 Books design system: Terminal Ledger · Circuit

Chosen 2026-10-16. Live tokens: `src/styles/global.css`. Reference canvas: https://claude.ai/artifact/2xBS1zVv17fZELAztHWdpH (Round 2, option 3).
Dark only. Clean and technical. Lime is the brand.

## Color
| Token | Hex | Use |
| --- | --- | --- |
| --bg | #0B0D10 | Page ground |
| --surface | #12161B | Panels (verdict box, AI lens, scoreboard) |
| --code-bg | #0F1216 | Prompt text blocks |
| --line | #232A33 | Hairline borders, empty bar segments |
| --empty | #1A2028 | Unfilled progress cells |
| --text | #E6EAF0 | Body text |
| --muted | #8B95A3 | Labels, secondary text (6.6:1 on bg) |
| --code | #C9D1DB | Prompt text |
| --brand | #B8F35A | Brand lime: wordmark underscore, buttons, links, published cells |
| --brand-hover | #D6FF8F | Link and button hover |
| --on-brand | #0B0D10 | Text on lime |
| --transcends | #B8F35A | Verdict: Transcends (same as brand on purpose) |
| --evolves | #5CC8E6 | Verdict: Evolves |
| --expires | #9B8AE6 | Verdict: Expires |

Rule: the three verdict colors step down in lightness (lime, cyan, violet) and always appear with a text label, never color alone.

## Type
- IBM Plex Sans (400, 500, 600, 700) for body and headings. Body 17px / 1.6.
- IBM Plex Mono (400, 500, 600) for labels, numbers, section markers, prompts. Labels 13 to 14px, uppercase, letter-spacing 0.06 to 0.08em.
- H1 60px / 1.05, 700, letter-spacing -0.02em. Core-idea lead 24px / 1.45, 500. Concept title 22px, 600.

## Layout
- Content max-width 1120px, side padding 32px (16px on phones). Sections 56px apart.
- Square corners everywhere (radius 0). 1px hairline borders in --line.
- Touch targets at least 44px tall.

## Components
- **Wordmark:** `365_BOOKS` in Plex Mono 600, the underscore in lime.
- **Nav:** Plex Mono 13px uppercase, muted: Library, Themes, Scoreboard, Reader zero, How it's made.
- **Section header:** `01 / The big idea`, Plex Mono 14px uppercase, muted.
- **Verdict panel:** surface box; a 14px bar of segments sized by count (3px gaps); legend with counts; "Reader zero" status on the right.
- **Verdict tags:** Transcends = solid lime fill with dark text. Evolves and Expires = 1px outline in their color with colored text. Plex Mono 12px uppercase.
- **Key concept row:** 56px number column (`2.0`) + title, tag, body, and a muted "why" line starting with a colored `>`.
- **AI analysis badge:** lime fill, dark text, Plex Mono 600.
- **Prompt block:** bordered box; header row with number, title and a lime "Copy prompt" button; prompt text in Plex Mono 14px on --code-bg. Other prompts collapse into 52px rows; the project starter is marked with ▶.
- **Persona scorecard:** two-column grid; each persona has name, score /5, a 5-segment lime bar and a one-line take; summary line in mono.
- **Scoreboard (home):** surface box; three big mono numbers in the verdict colors; one stacked bar.
- **Progress grid (home):** 365 square cells; published = lime, read by Joe = --text, empty = --empty.
- **Footer disclosure:** "Written by Claude (Anthropic), checked by a separate review pass..." plus "Report a correction" and an outlined "Get the book on Amazon" button.

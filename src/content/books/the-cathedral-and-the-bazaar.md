---
title: "The Cathedral and the Bazaar"
subtitle: "Musings on Linux and Open Source by an Accidental Revolutionary"
author: "Eric S. Raymond"
year: 1999
theme: "innovation-tech"
category: "business"
number: null
status: "verified"
confidence: "high"
read_time_min: 7
asin: ""
tags: { transcends: 3, evolves: 4, expires: 0 }
panel: { operator: 3, professor: 4, skeptic: 4, coach: 2, modernist: 4, advocate: 3, rubric: 3.9, panel: 3.33, final: 3.62 }
nominated_by: "Claude (canon)"
sources:
  - "https://catb.org/~esr/writings/cathedral-bazaar/cathedral-bazaar/index.html"
  - "https://firstmonday.org/ojs/index.php/fm/article/download/621/542?inline=1"
  - "https://catb.org/~esr/writings/magic-cauldron/magic-cauldron.html"
  - "https://nakamotoinstitute.org/the-cathedral-and-the-bazaar/"
  - "https://lists.gnu.org/r/groff/2021-11/pdfRt8tRop5yy.pdf"
  - "https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar"
  - "https://opensource.org/20years"
  - "https://newbooksnetwork.com/nadia-eghbal-working-in-public-the-making-and-maintenance-of-open-source-software-stripe-press-2020/"
  - "https://645ventures.com/voices/articles/github-at-scale-and-how-to-help-stadium-model-maintainers"
  - "https://www.wsvincent.com/working-in-public-book-review/"
joe_read: null
joe_rating: null
joe_note: null
---

## At a glance

**Software built in the open by a crowd of volunteers, released early and often and debugged by its own users, can beat software built carefully behind closed doors, and the motive that holds the crowd together is reputation, not pay.**

Eric S. Raymond · 1999 · Innovation and Technology · 7-minute read

## The big idea

Eric S. Raymond is a programmer and longtime member of the hacker culture he writes about. In the mid-1990s he was puzzled by Linux. He had believed that important software had to be built like a cathedral, by small groups working in isolation and releasing nothing before its time. Linux was instead built by thousands of volunteers over the internet, in what looked like a noisy bazaar of competing agendas and approaches, and it worked.

To find out why, he ran his own mail program, fetchmail, as a deliberate bazaar experiment. The title essay reports what he learned in 19 numbered lessons. He first presented it at the Linux Kongress in Germany in May 1997, and Netscape later cited it when it decided to release its browser's source code.

The O'Reilly book (1999, revised 2001) collects five essays: a short history of hacker culture, the title essay, "Homesteading the Noosphere" on ownership and reputation, "The Magic Cauldron" on economics, and "Revenge of the Hackers" on the launch of the open source movement.

## Key concepts

### 1. The cathedral and the bazaar · Evolves

The book contrasts two ways to build software. In the cathedral, a small team works privately and releases rarely, because it treats bugs as deep problems that take months of careful work to root out. In the bazaar, the code is public from the start, anyone can contribute, and releases come constantly. He is also clear about its limits: one cannot code from the ground up in bazaar style. A project needs something runnable and testable before a crowd can help.

*Why it evolves:* The split still frames a real choice, and many projects now mix the two, with a small core group setting direction inside a public repository.

### 2. Release early, release often · Transcends

Lesson 7 reads: release early, release often, and listen to your customers. Torvalds sometimes released new Linux kernels more than once a day, and Raymond almost never went more than ten days between fetchmail releases, releasing daily during intense work. Frequent releases, the essay argues, kept contributors stimulated and rewarded by visible progress.

*Why it transcends:* Continuous delivery made this standard practice, and AI makes each iteration cheaper still. The lesson's second half, listening to users, is the part teams still skip.

### 3. Linus's Law · Evolves

Lesson 8 holds that with a large enough base of beta testers and co-developers, most problems get pinned down quickly and someone in the crowd finds the fix obvious. Raymond names the short form after Torvalds: "Given enough eyeballs, all bugs are shallow." The essay also takes on Brooks's law (see our summary of *The Mythical Man-Month*), arguing that its principle is not repealed but that debugging is parallelizable and needs little coordination, so only a small core group pays the full overhead Brooks warned about.

*Why it evolves:* Eyeballs only help if someone looks. AI code review adds tireless eyeballs, but someone still has to understand and judge what they flag.

### 4. Scratch an itch, treat users as co-developers · Transcends

Lesson 1 says every good work of software starts by scratching a developer's personal itch. Raymond took over popclient, a POP3 mail client by Carl Harris, in June 1996 because he needed it, and renamed it fetchmail after adding SMTP forwarding, an idea he credits to a user. Lessons 6, 10 and 11 follow: treat users as co-developers, treat beta testers as your most valuable resource, and recognize good ideas from users. The essay argues the coordinator needs less original design genius than the ability to spot good ideas from others, plus people skills.

*Why it transcends:* Builders who use what they build, and who learn from users, still find the right problems first.

### 5. Gift culture and the reputation game · Evolves

"Homesteading the Noosphere" asks why volunteers give work away. Raymond describes three kinds of social order: command hierarchies, exchange economies and gift cultures, which arise under abundance. "In gift cultures, social status is determined not by what you control but by what you give away." Hackers compete for peer reputation. Their unwritten property rules mirror the Lockean theory of land tenure: a project is owned by its founder, by whoever is handed the baton, or by someone who claims an abandoned one after a public search. Taboos against forking projects, rogue patches and removing names from credits protect that reputation.

*Why it evolves:* Public reputation still pulls people into open work, though the small, close-knit culture the essay describes is not the scale most open projects run at today, as the critiques below show.

### 6. Use value over sale value · Transcends

"The Magic Cauldron" separates software's use value, its worth as a tool, from its sale value, its worth as a commodity. Raymond calls the belief that software is mainly a product for sale the manufacturing delusion: he puts the share of code written in-house at about 95 percent, so software is largely a service industry. Open source also reverses the tragedy of the commons, because shared code gains value as more people use it. The essay lists nine funding models, two non-profit and seven for profit, such as giving away the software and selling support.

*Why it transcends:* Firms that open AI model weights or developer tools to sell services and build standards are running plays from this list.

### 7. Selling open source to business · Evolves

"Revenge of the Hackers" tells how, after Netscape announced on 22 January 1998 that it would release its browser source, a group of advocates chose the label "open source" to pitch shared code to business on practical grounds rather than the moral ones of "free software." The strategy was top-down: win over executives and the Fortune 500, with Linux as the showcase. Raymond describes accepting a public role as the movement's spokesman. The Open Source Initiative, founded in late February 1998 by Raymond and Bruce Perens, guarded the term.

*Why it evolves:* The pitch to business largely worked, which raises the question Eghbal takes up below: who pays the people who maintain the code.

## The AI-era lens

*AI analysis*

This book predates today's AI tools, and this summary draws on no view of Raymond's about them, so what follows is our reading.

The bazaar's core mechanism, many contributors working on separable pieces with fast feedback, fits AI-assisted development well. Releases get cheaper, prototypes appear in hours and AI reviewers add more eyeballs than any volunteer crowd. The economics hold too: open models and tools are given away to build markets for services, as "The Magic Cauldron" described for software.

What changes is the scarce resource. On our reading, the bazaar story treats skilled contributors as the scarce input. When code is cheap to generate, the bottleneck shifts to maintainers who must review, judge and merge it, the very people Eghbal says the bazaar story overlooks. Linus's Law needs people who understand the code, not just more output aimed at it.

Verdict: 3 of 7 key concepts transcend and 4 evolve.

## Apply it with AI

Copy a prompt into your AI assistant. Each prompt carries the book's key ideas, so the AI works from this summary instead of its memory. The project starter turns the book into an ongoing coach that remembers your situation.

### 1. Pick your cathedral or bazaar

Decide how open to run a project.

```text
In "The Cathedral and the Bazaar," Eric S. Raymond contrasts cathedral development (a small team works privately and releases rarely) with bazaar development (public code, many contributors, constant releases). He argues the bazaar needs something runnable to start with and a coordinator who spots good ideas from others. In "The Magic Cauldron" he says opening code makes most sense when reliability matters, when correctness needs peer review, and when the software is shared infrastructure.

Ask me four questions about my project, its users and what I would lose by opening it. Then say whether to run it as a cathedral, a bazaar or a mix, what must exist before I invite contributors, and what to keep closed.

[paste a short description of your project here]
```

### 2. Speed up your release loop

Shorten the time between building something and hearing from users.

```text
Raymond's lessons in "The Cathedral and the Bazaar" include: release early, release often, and listen to your customers; treat users as co-developers; and treat beta testers as your most valuable resource. Frequent releases turn up problems while the work is fresh and reward contributors with visible progress.

Ask me three questions about how often I ship, who sees each release and how I collect feedback. Then design a release rhythm and a feedback channel for my next month, name the smallest useful version I could ship this week, and list what would make my testers feel like co-developers.

[paste your current release process or plan here]
```

### 3. Find a funding model for open work

Work out how to give something away and still pay for it.

```text
In "The Magic Cauldron," Raymond separates use value (what software is worth as a tool) from sale value (what it is worth as a product), and notes most code is written for in-house use. He lists funding models for open work, including cost sharing among users, loss leaders that open a market for paid products, giving away the software and selling support, selling accessories, and selling a brand or content.

Ask me four questions about what I build, who uses it and what they pay for today. Then say which of these models fit, what to give away and what to charge for, and the biggest risk in each option.

[paste a description of your product or tool here]
```

### Project starter

Paste this into a project or the custom instructions in your AI tool to keep working with the book's ideas over time.

```text
You are my open development adviser, grounded in Eric S. Raymond's "The Cathedral and the Bazaar." Core ideas: good work starts by scratching your own itch; release early and often and treat users as co-developers; given enough eyeballs, problems get found and fixed fast; open communities run on reputation and unwritten ownership rules; software's use value usually outweighs its sale value, so giving code away can pay; and a bazaar needs runnable code first and a coordinator who spots good ideas. Also keep in mind the critique that most open projects are carried by one or two overloaded maintainers.

When I bring you a project or plan: ask what is open and what is closed, how fast feedback arrives, who reviews contributions and how the maintainers are supported. Keep a running note in this project of release cadence, contributor activity and maintainer load.
```

## Critiques and caveats

Nadia Eghbal's *Working in Public* (Stripe Press, 2020) is the main update. A summary of the book on New Books Network says most open-source code is not developed by big teams or equitable collaborations but maintained by unseen individuals. Will Vincent's review notes that a small number of maintainers doing most of the work is the norm. Eghbal calls many such projects stadiums: high user growth, slow growth in contributors, and a few maintainers serving a crowd that mostly watches. That makes maintainer attention, not eyeballs, the limit. Raymond's own epilog calls Mozilla only a qualified success, in part because for a long time it did not ship something potential contributors could easily run and see working. Nikolai Bezroukov published two critical essays on the title essay in 1999. The evidence is mainly one author's experience with one project.

## Read it or skip it

**Read the full book** if you build software or products in public, run a developer community or want the original argument behind open source; the essays are free from the author. **Skip it** if you want a current picture of how open projects are run and funded; read *Working in Public* instead.

## Related books

- *Working in Public* by Nadia Eghbal
- *The Mythical Man-Month* by Frederick P. Brooks Jr.
- *Democratizing Innovation* by Eric von Hippel

## How this summary was made

Written by Claude (Anthropic) from the essays, which the author publishes free at catb.org, plus the sources listed above. It follows the title essay at version 3.0 (2002) and the other essays as collected in the 2001 revised edition. Checked on 2026-11-28 by a separate review pass against the author's free texts, which confirmed both quotes and the essay details and softened a few lines on release benefits, Brooks's law and Mozilla to match the text. Not a substitute for reading the book.

## How it made the list

| Persona | Score | Take |
| --- | --- | --- |
| The Operator | 3 | Release early and often is usable, but much of the book is history and anthropology. |
| The Professor | 4 | The founding text of open source thinking, though it rests on one author's experiment. |
| The Skeptic | 4 | Honest about its own limits and free to check, even if Linus's Law is oversold. |
| The Mindset Coach | 2 | About communities and code, with little on personal growth. |
| The Modernist | 4 | Its economics of giving code away explain much of today's open AI models. |
| The Reader's Advocate | 3 | Lively and free online, but the essays repeat themselves and assume some technical background. |

**Final score 3.62** (rubric 3.90, panel 3.33), ranked 25th of 73 Innovation and Technology candidates. Closest debate: the open-source slot, *The Cathedral and the Bazaar* (3.62) against *Working in Public* (3.44). The Modernist and the Professor argued Eghbal's book is the update Raymond needs; the others held that Raymond's essay is the original idea and Eghbal's book reads best as a critique of it. The vote went 4 to 2 for Raymond, and Eghbal became an alternate.

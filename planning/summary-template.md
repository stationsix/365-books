# 365 Books summary template

Every book file follows this exact structure. The books in `src/content/books/` are worked examples. Placeholders are in [brackets]. Section headings are fixed so the site can parse them.

## Rules (short)
- Length: about 1,200 to 1,500 words of reading text (prompts not counted). 5 to 7 minute read.
- Book sections are third person ("Rumelt argues"), echoing the book's tone. Never written as the author speaking.
- "The AI-era lens" and the "Why it ..." lines use the house voice: plain, curious, direct, no hype. Never guess an author's view on AI.
- At most 2 quotes, under 25 words each, verified in a reliable source.
- 5 to 7 key concepts, each tagged Transcends, Evolves or Expires. Front matter `tags` counts must match the headings.
- Prompts in "Apply it with AI" carry the book's key ideas inside the prompt, ask about the reader's situation first, and end with a [paste ... here] slot when they need the reader's material.
- Reader-facing text stays tool-neutral ("your AI assistant"), never naming a specific AI product. "Written by Claude (Anthropic)" in the disclosure stays: that is authorship.
- The site build checks the fixed section headings, 5 to 7 key concepts, and that `tags` match the headings; a mismatch fails the build.
- No em dashes. No invented facts. Every summary passes a separate verification pass before status becomes "verified".

## File skeleton

```markdown
---
title: "[Book title]"
subtitle: "[Subtitle, optional; delete line if none]"
author: "[Author name(s)]"
year: [publication year, per Library of Congress record]
theme: "[theme slug, e.g. strategy]"
category: "business"
number: null
status: "drafted"            # candidate | selected | drafted | verified | published
confidence: "high"           # high | medium
read_time_min: 7
asin: ""                     # Amazon ASIN; empty hides the buy button
tags: { transcends: [n], evolves: [n], expires: [n] }
panel: { operator: [1-5], professor: [1-5], skeptic: [1-5], coach: [1-5], modernist: [1-5], advocate: [1-5], rubric: [x.xx], panel: [x.xx], final: [x.xx] }
nominated_by: "[Public lists (n of 5) | Claude (canon) | Wildcard: Persona name]"
sources:
  - "[URL of outside source 1]"
  - "[URL of outside source 2]"
joe_read: null
joe_rating: null
joe_note: null
---

## At a glance

**[The core idea in one bold sentence.]**

[Author] · [Year] · [Theme name] · [n]-minute read

## The big idea

[About 150 words: who the author is, the problem the book tackles, its thesis, and how it is built. Third person, in the book's tone.]

## Key concepts

### 1. [Concept name] · [Transcends | Evolves | Expires]

[About 100 words explaining the concept as the book presents it.]

*Why it [transcends | evolves | expires]:* [One or two sentences in the house voice on how the concept holds up in the AI era.]

### 2. [Concept name] · [Tag]

[...repeat for 5 to 7 concepts...]

## The AI-era lens

*AI analysis*

[About 200 words in the house voice: overall verdict, what holds, what changes, and the tag tally, e.g. "Verdict: 5 of 7 key concepts transcend and 2 evolve."]

## Apply it with AI

Copy a prompt into your AI assistant. Each prompt carries the book's key ideas, so the AI works from this summary instead of its memory. The project starter turns the book into an ongoing coach that remembers your situation.

### 1. [Action name]

[One plain sentence on what this does.]

` ` `text
[Prompt: 1 to 2 sentences restating the relevant ideas from the book, then "Ask me [n] questions about ...", then the task, then a [paste ... here] slot if needed.]
` ` `

### 2. [Action name]

[...same shape...]

### 3. [Action name]

[...same shape...]

### Project starter

Paste this into a project or the custom instructions in your AI tool to keep working with the book's ideas over time.

` ` `text
You are my [role], grounded in [Author]'s "[Title]." Core ideas: [3 to 5 ideas in one sentence each or a compact list].

[How to behave when the reader brings a plan or decision, and what to keep a running note of in the project.]
` ` `

## Critiques and caveats

[About 100 words: what has not held up, main counterarguments, limits of the evidence.]

## Read it or skip it

**Read the full book** if [who benefits]. **Skip it** if [who should not bother, and what to do instead].

## Related books

- *[Title]* by [Author]
- *[Title]* by [Author]
- *[Title]* by [Author]

## How this summary was made

Written by Claude (Anthropic) from its knowledge of the book plus the sources listed above, then checked on [YYYY-MM-DD] by a separate review pass. [One sentence on what the check found or corrected.] [If medium confidence: why.] Not a substitute for reading the book.

## How it made the list

| Persona | Score | Take |
| --- | --- | --- |
| The Operator | [n] | [One-line take.] |
| The Professor | [n] | [One-line take.] |
| The Skeptic | [n] | [One-line take.] |
| The Mindset Coach | [n] | [One-line take.] |
| The Modernist | [n] | [One-line take.] |
| The Reader's Advocate | [n] | [One-line take.] |

**Final score [x.xx]** (rubric [x.xx], panel [x.xx]), ranked [n] of [N] [Theme] candidates. [Closest debate in one or two sentences.]
```

Note: in the skeleton above, the prompt fences are written as "` ` `text" so they don't break this file. In real book files use three backticks with no spaces.

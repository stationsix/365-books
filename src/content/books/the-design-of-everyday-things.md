---
title: "The Design of Everyday Things"
author: "Don Norman"
year: 1988
theme: "innovation-tech"
category: "business"
number: null
status: "verified"
confidence: "high"
read_time_min: 7
asin: ""
tags: { transcends: 4, evolves: 3, expires: 0 }
panel: { operator: 4, professor: 4, skeptic: 4, coach: 3, modernist: 4, advocate: 4, rubric: 4.60, panel: 3.83, final: 4.22 }
nominated_by: "Claude (canon)"
sources:
  - "https://jnd.org/the-design-of-everyday-things-revised-and-expanded/"
  - "https://andrewclark.super.site/product-book-summaries/the-design-of-everyday-things"
  - "https://www.nngroup.com/people/don-norman/"
joe_read: null
joe_rating: null
joe_note: null
---

## At a glance

**When people struggle with a door, a stove or a piece of software, the fault usually lies with the design, not the user, and good design makes the right action visible and the result of every action clear.**

Don Norman · 1988 · Innovation and Technology · 7-minute read

## The big idea

Norman is a cognitive scientist who taught at the University of California, San Diego, and later joined Apple as an Apple Fellow and User Experience Architect, one of the first jobs to carry the phrase "user experience," which he helped popularize. He wrote this book after years of watching intelligent people feel stupid in front of doors that hid which way they opened, stoves whose knobs didn't match their burners, and phones nobody could program.

His thesis is that these failures are not the user's fault. Designers build for machines and for their own expertise, then blame people for the errors their designs invite. Good design starts from how people actually perceive, think and act, and it communicates through the object itself.

The book first appeared in 1988 as *The Psychology of Everyday Things* and took its current title in 1990. The 2013 revised edition replaced most of the examples, added the idea of signifiers, and added two new chapters on design thinking and on design in business. The tone is curious and good-humored, with plenty of photographs of badly designed things.

## Key concepts

### 1. Affordances and signifiers · Evolves

An **affordance** is a relationship between an object and a person: what actions are possible, such as a chair affording sitting. A **signifier** is the cue that tells people where and how to act, such as a flat plate on a door that says push. Norman added signifiers in the 2013 edition because "affordance" had become confusing, especially for screen interfaces. The distinction matters: an action can be possible but invisible.

*Why it evolves:* AI interfaces are the extreme case. A blank chat box affords almost anything and signifies almost nothing, so users can't tell what the system can do. Designers now need new signifiers for capabilities that live in a model rather than in buttons.

### 2. Mapping and feedback · Transcends

**Mapping** is the relationship between controls and their effects. Good mapping uses spatial layout or cultural convention, so the knob for the front left burner sits at the front left. **Feedback** tells people immediately what happened after they acted. Without it, people repeat actions, give up, or assume the system is broken.

*Why it transcends:* Feedback is the core design problem for slow, probabilistic systems. Showing progress, sources and confidence is how AI tools tell users what happened, and the principle is the same one Norman applied to light switches.

### 3. Conceptual models · Transcends

People form a **conceptual model**, a simplified story of how something works, and use it to predict what their actions will do. The designer has a model in mind, but users only meet the product itself, which Norman calls the system image. When the system image is misleading, users build the wrong model and make confident mistakes, like turning a thermostat all the way up in the belief that the room will heat faster.

*Why it transcends:* Most AI misuse comes from a wrong conceptual model, such as treating a language model as a search engine or a database. Shaping an accurate mental model is the central design job for AI products.

### 4. The gulfs of execution and evaluation · Evolves

Norman describes action as seven stages, from forming a goal to judging the outcome. Two gaps cause most trouble. The **gulf of execution** is the distance between what people want and figuring out how to do it. The **gulf of evaluation** is the distance between what the system did and figuring out whether it worked. Good design bridges both.

*Why it evolves:* Natural language narrows the gulf of execution dramatically, since people can just say what they want. It often widens the gulf of evaluation: a fluent answer is easy to get and hard to check. The framework holds, but the hard side has flipped.

### 5. Knowledge in the head and in the world · Transcends

People do not need precise knowledge in memory if the world supplies it. Labels, layouts and **constraints**, which Norman sorts into physical, cultural, semantic and logical, guide behavior so people don't have to remember. Good designs put knowledge in the world for occasional users and let experts work from memory for speed.

*Why it transcends:* AI shifts more knowledge out of people's heads and into tools. Norman's balance becomes a design decision with real stakes: how much should users still know to catch a tool's mistakes?

### 6. Human error is usually design error · Transcends

Norman separates **slips**, where the right goal leads to the wrong action, from **mistakes**, where the goal or plan itself is wrong. Most accidents blamed on human error trace back to designs that invite slips or hide the information needed to avoid mistakes. His remedies include forcing functions, easy undo, and making errors easy to notice and reverse, rather than relying on warning dialogs people click past.

*Why it transcends:* Automation creates new kinds of error, such as people trusting an output they should have checked. Norman's rule that systems should be designed for the errors people will make applies directly to AI tools.

### 7. Human-centered design · Evolves

The 2013 edition adds a process: observe people, generate ideas, prototype, test and repeat. Norman frames it with the double diamond, which first widens the problem and then narrows it, before widening and narrowing the solution. He insists designers solve the right problem before solving the problem right.

*Why it evolves:* AI makes prototypes and variations nearly free, so iteration runs much faster. The discipline of observing real people and questioning the problem doesn't speed up, and it becomes the bottleneck.

## The AI-era lens

*AI analysis*

This book was written about doors and stoves, and it turns out to be one of the best guides on the list for designing AI products. Nearly every common complaint about AI tools maps to a concept here: users can't tell what the system can do (signifiers), don't understand how it works (conceptual models), and can't easily judge whether its output is right (the gulf of evaluation).

The biggest shift is in that last idea. Norman's world was mostly about helping people figure out how to act. AI makes acting easy and evaluating hard, so the design effort moves from the controls to the output: showing sources, uncertainty and what the system actually did. The human-centered process also speeds up, but only on the parts that involve making things, not understanding people.

Verdict: 4 of 7 key concepts transcend and 3 evolve. Anyone building, buying or rolling out AI tools will find a vocabulary here for why people struggle with them.

## Apply it with AI

Copy a prompt into your AI assistant. Each prompt carries the book's key ideas, so the AI works from this summary instead of its memory. The project starter turns the book into an ongoing coach that remembers your situation.

### 1. Audit a product or process

Find where a product, form or internal tool is quietly confusing people.

```text
I just read a summary of Don Norman's "The Design of Everyday Things." Norman argues that most "user error" is design error. Good design uses signifiers (cues showing where and how to act), natural mapping between controls and effects, immediate feedback, and a system image that gives users an accurate conceptual model. It also bridges the gulf of execution (figuring out how to act) and the gulf of evaluation (figuring out whether it worked).

Ask me three questions about who uses the thing I'm describing and what they're trying to do. Then review it against each principle above, list the five problems most likely to cause errors or frustration, and suggest a fix for each.

[paste a description, screenshot text or walkthrough here]
```

### 2. Close the gulf of evaluation

Make an AI tool's output easier for people to check.

```text
Don Norman ("The Design of Everyday Things") describes the gulf of evaluation: the gap between what a system did and a person's ability to tell whether it worked. AI tools make acting easy but often make evaluation hard, because fluent output is hard to check.

Ask me what AI tool or workflow my team uses, who reviews its output, and what goes wrong when it's wrong. Then suggest specific ways to make the output easier to evaluate (feedback, sources, signals of uncertainty, review steps), ranked by effort and impact.
```

### 3. Fix the mental model

Find the wrong beliefs people hold about a tool and decide how to correct them.

```text
Don Norman ("The Design of Everyday Things") says people build a conceptual model of how a thing works from the system image (what the product shows them), not from the designer's intentions. A wrong model leads to confident mistakes.

Ask me about a tool or system my users or colleagues misuse. Then list the most likely wrong conceptual models they hold, what each one causes them to do, and changes to the product, onboarding or wording that would correct each model without a manual.
```

### Project starter

Paste this into a project or the custom instructions in your AI tool to keep working with the book's ideas over time.

```text
You are my design critic, grounded in Don Norman's "The Design of Everyday Things." Core ideas: most human error is design error; affordances are what's possible and signifiers show where to act; good mapping and immediate feedback prevent confusion; users act on conceptual models built from the system image; good design bridges the gulfs of execution and evaluation; knowledge can live in the world through labels and constraints; and human-centered design means observing people and solving the right problem before iterating.

Whenever I bring you a product, process, form or AI rollout: start by asking who uses it and what they're trying to do, then point out where it will make people feel stupid and why. Keep a running note in this project of the usability problems we've found and which ones we've fixed.
```

## Critiques and caveats

The book favors usability over aesthetics, and Norman himself later argued in *Emotional Design* (2004) that attractive things work better partly because they make people more tolerant of problems. Much of the evidence is anecdotal, built on observation rather than controlled studies. The concept of affordance, borrowed from psychologist J. J. Gibson, was used loosely enough that Norman had to add signifiers to repair it. Some readers find the human-centered process in the revised edition generic next to the sharper early chapters.

## Read it or skip it

**Read the full book** if you design, buy or roll out products, software, forms or AI tools, or if you've ever blamed users for a confusing system. The 2013 revised edition is the one to get. **Skip it** if you need a hands-on interface design manual; *Don't Make Me Think* by Steve Krug is faster for web work.

## Related books

- *Change by Design* by Tim Brown
- *Don't Make Me Think* by Steve Krug
- *Emotional Design* by Don Norman

## How this summary was made

Written by Claude (Anthropic) from its knowledge of the book plus the sources listed above, then checked on 2026-10-17 by a separate review pass, which found no factual errors; it sharpened Norman's Apple title, the reason signifiers were added, and how the book treats error warnings. Not a substitute for reading the book.

## How it made the list

| Persona | Score | Take |
| --- | --- | --- |
| The Operator | 4 | Changes how you see every form, dashboard and process you own. |
| The Professor | 4 | Founded the vocabulary of user experience. |
| The Skeptic | 4 | Puts blame on design instead of on people, and backs it up. |
| The Mindset Coach | 3 | Teaches empathy for the person on the other side of the product. |
| The Modernist | 4 | The best guide on the list to why AI tools confuse people. |
| The Reader's Advocate | 4 | Funny, concrete and full of examples you'll notice the next day. |

**Final score 4.22** (rubric 4.60, panel 3.83), ranked 3rd of 73 Innovation and Technology candidates. It drew no close debate: every persona scored it 3 or higher.

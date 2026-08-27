# Content notes for the copy rewrite

Captured 2026-08-26/27 from a page-by-page review of the Direction B build on the PR #3 branch preview.
This is a decision record for the rewrite, not draft copy.
The rewrite itself is a single pass in the owner's own voice, still to come.

## Facts to correct (not matters of taste)

- The voice-AI client was a **startup**, not a large enterprise.
  Live production and the PR branch both say "leading/large enterprise" in four places: `FeaturedWork.tsx` and three spots in `work/page.tsx`.
  The surrounding sentence ("needed to know whether voice AI could work before committing budget") is an enterprise-procurement story and should be rethought with the noun.
- "Two pilots, then two further contracts" is ambiguous: a reader can take it as business the client won with the product rather than engagements they gave us.
  The second reading is the more impressive one, so a reader who picks it feels misled.
  Do not use the word "contracts"; say what the relationship was (they kept us on).
  "Two pilots" is accurate and stays: the client ran them with partner organisations, who gave staff (one pilot) or their own clients (the other) access to the prototype; dozens of real users ran voice-AI conversations, and the sessions fed product improvement and validated that it solved a problem.
  Do not quote the user count; "real users" is the claim, and dozens is a small number in print.
- Trumpet was acquired by OpenTable; Zach never worked at OpenTable.
  Already fixed on the branch; keep it that way.

## Positioning decisions

- "The right thing, built well." stays for now.
  Owner's verdict: not bad, still up for consideration.
- The home stat line currently mixes capability proof (3 weeks to prototype, 6 to MVP) with relationship proof (pilots, follow-on work).
  Lead with the speed; demote the continued relationship to a supporting line or bullet.
- "In practice" as a section label is retired.
  It reads as an editorial-magazine flourish and says nothing.
- "The two of us. Nobody else is between you and the code." (home and About) claims too much.
  The defensible claim is about judgment, not hands: when a customer is working out what to build and how, they are working directly with the two partners.
  Say nothing about subcontractors either way.
- Ethics passage: still deferred, still to be written first-person as a way of working, not a badge.
  Currently absent on purpose rather than faked.
  Proposal (2026-08-27): one paragraph of roughly 100-150 words under its own heading at the bottom of About, below the bios and above the closing CTA.
  Concept: make the ethical reading of "the right thing" explicit; the right thing includes whether it should be built at all.
  Three beats, each concrete rather than declared: work we turn down; how we treat the people on the other end of the data (children's clinical records, patient data); honesty with clients about what AI can and cannot do, including telling them when they do not need it.
  Avoid "ethical AI", "responsible AI" and any badge vocabulary; the anonymised, un-inflated case studies are themselves the evidence.

## Work page: three entries, co-equal

Each entry is named by the capability it proves, not the technology.
That is what keeps two voice-AI stories from reading as "voice AI shop" and still lets a voice-AI prospect see the depth.

Order: product partnership first, security-startup second, clinical tool last.
Leading with the clinical tool was considered and rejected because it has no AI story.

### 1. Voice-AI build (startup) - proves product partnership

- The work was helping them decide what the product should be: the interactions, what the system captures, what it should grow into.
  Iterative, over months; longer but not long.
- Speed facts already on the site are real and stay: 3 weeks to a speaking prototype, 6 to an MVP.
- Relationship proof: they kept us on (replaces "two further contracts").
- New fact to add: Zach did the technical interviewing for their CTO hire and advised on it.
  Keep it factual and small; it is the strongest trust signal in the set.
- Logo: not for now (see anonymity decision below).

### 2. Security-space voice-AI startup - proves expertise and leadership

- Their CTO and six engineers had spent six weeks without a working conversational agent.
- Zach built one from scratch in three days (started Tuesday night), laid the foundation in a day, then worked with the CTO to delegate the rest to their team.
- By Friday they pitched it to a major crypto exchange.
  **Do not name the exchange.**
- **Do not state the $1.1M ARR figure.** It was relayed by their CEO and extrapolated from monthly; not first-hand.
- **Do not mention that the company later shut down.** Scope the claim to the intervention, not their outcome.
- Logo: assume no.
- This is also the proof for the "For small teams / fractional AI lead" path on Services.

### 3. Children's clinical assessment tool (11 months) - proves domain absorption and shipping

- Organisation with no in-house technology function.
  We learned the clinical domain and translated a paper assessment system into a digital interaction model.
- No AI features in year one; designed AI-capable from the start.
  State what it is confidently and let AI-readiness be texture, not the point.
- Its job on the page is to prove the "built well" half of the tagline: production, at scale, in a sensitive field.
- Stat to surface: children assessed.
  Owner knows it is over 4,000 as of Aug 2026; **get the exact figure before it goes on a page.**
  Present it as a big serif number with a label, matching the weight of the voice-AI figures.
- Duration (11 months) is not the lead; it reads as slow, not hard.
- Do not imply cheap. "Small team, tight budget" reads as price; the flex is a small senior team absorbing that much complexity.
- Minnesota is signed but not onboarded: **stays off the site.**
- Logo: not for now (see anonymity decision below).
- On Services this same engagement proves a different sentence: we design the foundation so AI can come later.

### Anonymity decision (2026-08-27)

Every entry stays fully anonymous for this release so the site can go out without waiting on logo or naming permission.
No client names, no logos, no logo slots in the layout.
Permissions can be pursued later and the entries upgraded then.

### Layout consequences

- The current right-column paragraph under "Voice AI, from open question to production" reads as a footnote to the voice-AI entry.
  Give each entry its own heading and body of equal weight.
- No logo elements in this release; if logos come later, they go inside an entry as an optional element, never in a shared strip a third entry is missing from.
- Home features one entry (the voice-AI build, for the product/engineering-leader audience); the other two live on Work.

## Services page

- The subtitle ("We offer comprehensive AI and data engineering solutions...") is the old site's copy carried forward.
  It is the generic-AI-shop sentence the redesign exists to retire; first line to go.
- "Agents that work inside your systems": keep the heading and the full scope, from agentic capability inside a larger build to an agent that is the product.
  Drop the 24/7-customer-support use case: not something we have done or been asked to do, and it is the productized segment where we are least differentiated.
  Workflow automation and document/context work can stay in some form; they are true of the work, just no longer the headline.
- The other three services are things we have been paid to do and stand as they are.
- The insurance-agents tool is **not named on the site yet**; revisit as it develops, since it is the obvious future evidence for the agents entry.

## Contact page

- "San Francisco Bay Area, California" is wrong: the company is in San Francisco itself.
  Carried forward from the old site; live in production today.
  The footer already says "San Francisco" correctly, so the contact block should match it.
- Otherwise the page is the approved headline and reply promise plus the existing Formspree form.

## About page

- Fine as is apart from the "nobody else between you and the code" line (see positioning).
- Bios are already in a real voice; if rewritten it is for length and emphasis, not authenticity.

## Brand mark

- The placement decision is complete: About opens on the mark, left-aligned on the grid at 160px on large screens, while the header keeps the small mark.
  This is not a return of the removed 160px hero logo, which made the logo do the hero's job.
- The opaque white-ground logo and its `mix-blend-multiply` workaround are gone.
  See [AGENTS.md](../AGENTS.md#design) for the current asset and regeneration contract.

## Future: writing

The owner may publish essays (Substack) and later republish or link to them from the site.
Nothing is built now; no affordance until there is a first piece.
When it comes, three paths, all compatible with the static export and none needing a CMS:
link out (a nav item or a line on About); republish (a `/writing` route rendered from Markdown at export time); or a build-time list of Substack posts read from its RSS feed during `next build`.
The editorial design already has the title, date and measured text column an essay page needs, and the nav has room for one more item.

## Open items

- [ ] Exact count of children assessed.
- [ ] Logo/naming permission: deferred past this release (voice-AI startup; clinical client).
- [ ] Ethics passage (owner writes).
- [x] Mark placement and transparent derived assets; provenance and regeneration details live in [AGENTS.md](../AGENTS.md#design).
- [ ] Voice AI: lean in as a specialty or keep it one capability among several? Deferred; the capability-named framing above works either way.

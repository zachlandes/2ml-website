# Content notes for the copy rewrite

Captured 2026-08-26/27 from a page-by-page review of the Direction B build on the PR #3 branch preview.
This is a decision record for the rewrite, not draft copy.
The rewrite itself is a single pass in the owner's own voice, still to come.

## Facts to correct (not matters of taste)

- The voice-AI client was a **startup**, not a large enterprise.
  At review time, live production and the PR branch said "leading/large enterprise" in four places: `FeaturedWork.tsx` and three spots in `work/page.tsx`.
  The prior surrounding sentence ("needed to know whether voice AI could work before committing budget") was an enterprise-procurement story and needed to be rethought with the noun.
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
- The prior home stat line mixed capability proof (3 weeks to prototype, 6 to MVP) with relationship proof (pilots, follow-on work).
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
  Correction 2026-08-27: the subject IS ethics in AI, specifically, and the heading should say so; "how we work" was a guard against the badge presentation, not the topic.
  The owner's positions, in his words, as source material for the passage:
  (1) Disclose when a person is talking to AI, up front, whenever a human is not in the loop, i.e. for fully autonomous conversational AI or communication.
  (2) No AI that replaces a medical intervention without a safety process that includes expert review. The event behind it: he turned down consulting on a psychology-type voice-AI project because he was not comfortable implementing something with such significant health implications where he could not be the person deciding whether it was safe.
  (3) No AI that is anti-consumer. AI should improve the customer experience, not be a race to the bottom.
  (4) Mitigate the pre-trained bias of AI against minority groups and women.
  (5) The right thing includes whether it should be built at all.
  Register: a rule, then the thing actually done. Keep spoken phrases like "race to the bottom"; they are the anti-tell.
  Open framing choice (2026-08-27): ethics passage, or a mission statement that heavily touches ethics.
  Recommended: one passage, mission-shaped opening (what AI should do for people; "improve the customer experience, not a race to the bottom" is already that sentence), then the positions as the concrete edges. It should read as the tagline unpacked, not a second tagline; keep at least one line that cost something (the turned-down project) so the aspiration is believed. Avoid a heading that says "mission"; the old site's Mission card was removed for being generic.

## Work page: three entries, co-equal

Each entry is named by the capability it proves, not the technology.
That is what keeps two voice-AI stories from reading as "voice AI shop" and still lets a voice-AI prospect see the depth.

Order: voice product first, clinical entry second, three-day entry last.
On a phone, the two voice stories must not stack back to back, while the clinical entry still does not lead.

### 1. Voice-AI build (startup) - proves product discovery

- The work was helping them decide what the product should be: the interactions, what the system captures, what it should grow into.
  Iterative, over months; longer but not long.
- Name it by its recognised name: **product discovery**, and specifically continuous discovery, alongside strategy, architecture and engineering.
  Startups know the term; it says "not a vendor building to a spec" in two words and shows we speak their vocabulary.
- Speed facts already on the site are real and stay: 3 weeks to a speaking prototype, 6 to an MVP.
- Relationship proof: they kept us on (replaces "two further contracts").
- New fact to add: Zach did the technical interviewing for their CTO hire and advised on it.
  Keep it factual and small; it is the strongest trust signal in the set.
- Logo: not for now (see anonymity decision below).

### 2. Security-space voice-AI startup - proves expertise and leadership

- Their CTO and six engineers had spent six weeks without a working conversational agent.
- The whole build took three days (started Tuesday night); the sentence must not present "three days", "foundation in one" and "handed the rest to the team" as three parallel events, because the second and third are what the three days consisted of.
  Day one: after learning what they wanted, Zach built the foundation himself, essentially solo apart from meetings.
  Days two and three: still building as an IC, and now leading: he split the remaining work into pieces, the CTO told him which engineer fit each, he met each engineer and got them clear on what to build so it integrated into a working application by Friday.
  The structure is a colon, not commas: three days, then what the three days were.
- Technical substance, for the Work page (2026-08-27): the three days produced a realtime voice-AI pipeline built from scratch, with telephony wired in so the agent could be on the other end of a real phone call, and a working application by Friday, not a demo. "Demo" undersells it and is retired.
  The pipeline also did voice cloning. **Kept off the site for now**: with "security startup" and "crypto exchange" already stated, cloning narrows the description enough to risk identifying the client. Owner may decide otherwise for the Work page.
  Home keeps the summary technology-light under the headline rule; the substance lives in the Work entry's highlights.
- Claim boundary (settled 2026-08-27): the Friday pitch **led to a preliminary commitment from the exchange**. That is the claim, exactly.
  Not "sold"; not the $1.1M figure; and no stated link between that meeting and the $1.1M the CEO mentioned three weeks later, because the owner does not know how the two are related.
  Say "a major crypto exchange" in full: "a major exchange" on its own is unclear. "Preliminary commitment" is the fact in shorthand, not settled wording.
- Two distinct positives here; keep them apart. **During:** he led their engineers through the build, coordinating the team with the CTO from day one. **After:** they took it from there.
  This entry is named for expertise and leadership, so the heading carries the during-the-build claim; the handoff is a sentence in the body, not the headline.
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
- Stat to surface: children on the platform, and say what that means: the organisations using the tool pay per child.
  Keep "paid seats" out of the label; a count of children stays a count of people. The commercial fact goes in the body sentence in plain words ("its customers pay per child on it"), which is what turns shipped software into a per-child SaaS business, running.
  That turns "the tool gets used" into "we built a per-child SaaS product that is running commercially at this scale", which is the claim a product or engineering leader cares about.
  Owner knows it is over 4,000 as of Aug 2026; **get the exact figure before it goes on a page** (asked of firstmate; the platform count is the one to quote, labelled as such).
  Present it as a big serif number with a label, matching the weight of the voice-AI figures.
- Duration (11 months) is not the lead; it reads as slow, not hard.
- Do not imply cheap. "Small team, tight budget" reads as price; the flex is a small senior team absorbing that much complexity.
- Minnesota is signed but not onboarded: **stays off the site.**
- Ruling 2026-08-27: because the customer stays anonymous, aggregate Help Connect numbers may be considered, but **no number is chosen or published until the counts and definitions are delivered and the owner decides directly** what can and cannot appear.
- Measured production aggregates were delivered 2026-08-27 (read-only, definitions and caveats held privately). **The owner's working figure of "over 4,000" is not supported by production**: every defensible count is lower. No figure is recorded here until one is approved for publication.
- Regime: **FERPA plus Head Start confidentiality. Do not claim HIPAA**; any broader compliance claim needs counsel. The site's current "FERPA-grade" wording is on the right side of this.
- Non-identifying description of the tool, usable in copy: the HELP 0-3 assessment, birth through about age three, across seven developmental domains.
- Do not reuse the stale README claims of "5,000+ teachers" or "685 skills" anywhere.
- Logo: not for now (see anonymity decision below).
- On Services this same engagement proves a different sentence: we design the foundation so AI can come later.

### Anonymity decision (2026-08-27)

Every entry stays fully anonymous for this release so the site can go out without waiting on logo or naming permission.
No client names, no logos, no logo slots in the layout.
Permissions can be pursued later and the entries upgraded then.

### Headline rules (from the Option C review, 2026-08-27)

- Headings name the client's problem, not the technology; the body names the technology.
  A scan of the page should say "they solve problems like mine", not "they build voice AI".
- A problem-only headline reads as our failure ("Six weeks, six engineers, still no working agent").
  Chosen device (C2): a short muted problem line above, then a heading that states what the client has now.
- Every heading must stand alone on a scan: no pronouns whose antecedent is in another line ("shaped and shipped with them").
- Voice check: if a phrase sounds like a headline rather than something the owner would say to a client on a call, it is an AI tell ("a team that could carry it").
  The plain version is almost always a concrete event (their own engineers took it from there; they pitched it that Friday; they kept us on) rather than a quality (could carry it, built well, shaped and shipped).

### Phone review (2026-08-27)

- On a phone the hero proof column, the featured entry and the three-day entry stacked into three voice-AI items in a row, and the hero column repeated the featured engagement under the same "Featured work" label.
  Fix: the hero column is now a strip of all three engagements' numbers (3 wks, 2,600+, 3 days), so the first proof a reader sees is breadth; and the clinical entry sits between the two voice stories on Home and Work, so voice never appears twice in a row while still not leading.
- "Read all three" sat between entry one and entries two and three on a phone, pointing at content directly below it. It now follows all three.
- The hero strip carried a biographical line (Nielsen, Walmart, OpenTable, the patents) under the "Three engagements" label, so it read as engagements. Removed: every fact in it already appears under the right name in "Who does the work" on the same page. If it ever returns to the hero it needs its own label, ruled off from the stats.

### Layout consequences

- The former right-column paragraph under "Voice AI, from open question to production" read as a footnote to the voice-AI entry.
  Give each entry its own heading and body of equal weight.
- No logo elements in this release; if logos come later, they go inside an entry as an optional element, never in a shared strip a third entry is missing from.
- Home leads with the voice-AI build for the product/engineering-leader audience, then shows the other two as entries in their own right; Work presents all three as co-equal rows.

## Services page

- The removed subtitle ("We offer comprehensive AI and data engineering solutions...") was the old site's copy carried forward.
  It was the generic-AI-shop sentence the redesign exists to retire.
- "Agents that work inside your systems": keep the heading and the full scope, from agentic capability inside a larger build to an agent that is the product.
  Drop the 24/7-customer-support use case: not something we have done or been asked to do, and it is the productized segment where we are least differentiated.
  Workflow automation and document/context work can stay in some form; they are true of the work, just no longer the headline.
- The other three services are things we have been paid to do and stand as they are.
- The insurance-agents tool is **not named on the site yet**; revisit as it develops, since it is the obvious future evidence for the agents entry.

## Contact page

- "San Francisco Bay Area, California" was wrong: the company is in San Francisco itself.
  At review time, it had been carried forward from the old site and was live in production.
  The footer already said "San Francisco" correctly, so the contact block needed to match it.
- Otherwise the page is the approved headline and reply promise plus the existing Formspree form.

## About page

- The only approved change was replacing the "nobody else between you and the code" line (see positioning).
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

- [x] Figure approved 2026-08-27: **2,600+ children on the platform** (active child records excluding internal test organisations, measured that day). Chosen over the larger lifetime total because it needs no qualifier and only goes up. Revisit from a fresh measurement rather than rounding up.
- [ ] Logo/naming permission: deferred past this release (voice-AI startup; clinical client).
- [ ] Ethics passage (owner writes).
- [x] Mark placement and transparent derived assets; provenance and regeneration details live in [AGENTS.md](../AGENTS.md#design).
- [ ] Voice AI: lean in as a specialty or keep it one capability among several? Deferred; the capability-named framing above works either way.

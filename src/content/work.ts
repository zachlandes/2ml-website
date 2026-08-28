/**
 * One owner for the three engagements, so the home page's Featured work band
 * and the Work page cannot drift apart. Every client stays anonymous: no
 * names, no logos, no figures that are not first-hand and defensible.
 */
export interface Engagement {
  slug: string;
  /* What the engagement proves; the eyebrow */
  capability: string;
  /* The client's situation, stated so it stands alone on a scan */
  problem: string;
  /* What they have now */
  title: string;
  summary: string;
  highlights?: { title: string; detail: string }[];
  stat?: { figure: string; label: string };
}

export const engagements: Engagement[] = [
  {
    slug: 'voice-product',
    capability: 'Continuous discovery',
    problem: 'They needed the product before they knew what it should be.',
    title: 'A voice product, shaped and shipped alongside its founders',
    summary:
      'A startup needed to work out what a realtime voice-AI product should be before committing to it. In three weeks they had a speaking prototype with live evaluations; in six, an MVP on scalable cloud infrastructure. Two pilots followed, and they kept us on.',
    highlights: [
      { title: 'Speech agent', detail: 'Low-latency, interruptible, grounded in their data.' },
      { title: 'Live evaluations', detail: 'Every conversation scored, blind to how a person talks, so the pilots produced evidence.' },
      { title: 'Built to hand over', detail: 'Infrastructure as code, tests, documentation.' },
    ],
    stat: { figure: '3 wks', label: 'to a speaking prototype' },
  },
  {
    slug: 'clinical-assessment',
    capability: 'Learning the domain',
    problem: 'A paper process, no technology team, thousands of children.',
    title: 'A clinical assessment, rebuilt as software',
    summary:
      'An organisation with no in-house technology function. We learned the clinical domain and turned a paper developmental assessment for young children into a digital tool, handling FERPA-grade data, with the foundation laid so AI features can follow. It is in production today, and its customers pay per child on it.',
    // Active child records on the platform, whose customers pay per child;
    // measured 2026-08-27 and approved by the owner. Revisit rather than round up.
    stat: { figure: '2,600+', label: 'children on the platform' },
  },
  {
    slug: 'three-days',
    capability: 'Expertise and leadership',
    problem: 'Six weeks, six engineers, no working agent.',
    title: 'A working agent in three days, leading their engineers through the build',
    summary:
      "A security startup’s seven engineers spent six weeks trying and failing to build a conversational agent. We built it with them in three days: the foundation on day one, ourselves; then, with the CTO, we split the remaining work, matching each piece to one of their engineers. By the afternoon of the third day, they demo’d the working app to a major crypto exchange and came away with a preliminary commitment.",
    highlights: [
      { title: 'Realtime voice', detail: 'A voice-AI pipeline built from scratch, not assembled from a demo.' },
      { title: 'On the phone', detail: 'Telephony wired in, so the agent could take a real call.' },
      { title: 'Their team, from day two', detail: 'The work split across their engineers and integrated by Friday.' },
    ],
    stat: { figure: '3 days', label: 'to a working agent' },
  },
];

export const featured = engagements[0];
export const alsoFeatured = engagements.slice(1);

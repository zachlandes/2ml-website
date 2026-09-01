/**
 * One owner for the four "what we build" lines, so the home summary and the
 * Services page cannot drift apart.
 */
export interface Service {
  title: string;
  summary: string;
  details?: string[];
}

export const services: Service[] = [
  {
    title: 'Agents that work inside your systems',
    summary:
      'Assistants and automations that take routine work off your team, grounded in your documents, data and tools.',
    details: [
      'Workflow automation for common business processes',
      'Automated task handling and response management',
      'Smart document understanding and organization',
    ],
  },
  {
    title: 'AI inside your product',
    summary:
      'New capabilities in an existing product, or a new one from the ground up, with evaluations from day one.',
    details: [
      'Custom AI features and product enhancements',
      'Intelligent automation and decision systems',
      'Computer vision and natural language solutions',
      'Scalable AI infrastructure and deployment',
    ],
  },
  {
    title: 'A plan and a team that can execute it',
    summary:
      'Readiness, roadmap and architecture, from people who will still be here to build it.',
    details: [
      'AI readiness assessment and roadmap development',
      'Technology selection and implementation planning',
      'Custom training programs and workshops',
      'ROI analysis and adoption best practices',
    ],
  },
  {
    title: 'For small teams',
    summary:
      'A fractional AI lead or a fixed-scope sprint when you need expertise your own team does not have yet.',
  },
];

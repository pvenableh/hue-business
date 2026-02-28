/* ================================================================
   SERVICE PACKAGES & À LA CARTE — Hard-coded for precise presentation
   ================================================================ */

export interface DeliverableGroup {
  icon: string
  title: string
  items: string[]
}

export interface ServicePackage {
  id: string
  name: string
  tagline: string
  price: string
  featured: boolean
  bestFor: string
  groups: DeliverableGroup[]
}

export interface AlacarteService {
  icon: string
  name: string
  price: string
  description: string
}

export const packages: ServicePackage[] = [
  {
    id: 'foundation',
    name: 'Brand Foundation',
    tagline: 'Look like the company you\'re becoming',
    price: '$15,000',
    featured: false,
    bestFor: 'Companies establishing or refreshing their brand identity as they professionalize operations.',
    groups: [
      {
        icon: '◆',
        title: 'Brand Rationale & Positioning',
        items: [
          'Strategic brand analysis',
          'Competitive landscape review',
          'Core messaging framework',
          'Tagline development',
        ],
      },
      {
        icon: '○',
        title: 'Visual Identity System',
        items: [
          'Logo design + variations',
          'Color palette & typography',
          'Brand guidelines document',
        ],
      },
      {
        icon: '□',
        title: 'Corporate Collateral',
        items: [
          'Business cards',
          'Letterhead & envelopes',
          'Email signature templates',
          'PowerPoint / Keynote template',
        ],
      },
    ],
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    tagline: 'Capture and convert leads consistently',
    price: '$30,000',
    featured: true,
    bestFor: 'Companies ready to invest in scalable lead generation and a digital presence that converts.',
    groups: [
      { icon: '◆', title: 'Everything in Brand Foundation', items: [] },
      {
        icon: '□',
        title: 'Website Design & Development',
        items: [
          'Custom-built (not template)',
          'Mobile-responsive design',
          'SEO foundation',
          'Content strategy & copywriting',
          'CMS for easy self-management',
        ],
      },
      {
        icon: '△',
        title: 'Lead Generation System',
        items: [
          'Landing page(s)',
          'Email newsletter template',
          'Drip campaign setup (3–5 emails)',
          'CRM integration',
          'Lead capture forms',
          'Analytics & tracking setup',
        ],
      },
    ],
  },
  {
    id: 'presence',
    name: 'Market Presence',
    tagline: 'Show up everywhere and dominate',
    price: '$50,000',
    featured: false,
    bestFor: 'Companies pursuing aggressive growth, preparing for exit, or competing at trade shows and industry events.',
    groups: [
      { icon: '◆', title: 'Everything in Growth Engine', items: [] },
      {
        icon: '○',
        title: 'Expo & Trade Show Collateral',
        items: [
          'Booth wall design',
          'Pop-up banner designs',
          'Printed brochures & sell sheets',
          'Leave-behind folders / kits',
        ],
      },
      {
        icon: '□',
        title: 'Sales Enablement',
        items: [
          'Pitch deck / capabilities presentation',
          'Case study templates',
          'Proposal templates',
        ],
      },
      {
        icon: '△',
        title: 'Ongoing Support',
        items: [
          'Quarterly content refreshes',
          'Campaign-specific landing pages',
          'Event collateral as needed',
        ],
      },
    ],
  },
]

export const alacarteServices: AlacarteService[] = [
  { icon: '□', name: 'Landing Page', price: 'From $2,500', description: 'Conversion-optimized single page' },
  { icon: '△', name: 'Email Campaign', price: 'From $2,000', description: 'Strategy, design & deployment' },
  { icon: '○', name: 'Trade Show Banner', price: 'From $800', description: 'Print-ready booth graphics' },
  { icon: '◆', name: 'Brochure / Sell Sheet', price: 'From $1,500', description: 'Sales-ready print collateral' },
  { icon: '□', name: 'Pitch Deck Design', price: 'From $3,000', description: 'Investor or client presentations' },
  { icon: '△', name: 'Video Production', price: 'From $5,000', description: 'Brand films & product videos' },
  { icon: '○', name: 'Newsletter Management', price: 'From $1,500/mo', description: 'Monthly content & sends' },
  { icon: '◆', name: 'Website Maintenance', price: 'From $1,000/mo', description: 'Updates, hosting & support' },
]

export const retainerPlans = [
  {
    id: 'essentials',
    name: 'Essentials',
    price: '$3,500',
    period: '/month',
    hours: '20 hours',
    description: 'Ongoing design support for companies that need consistent creative output without the overhead of a full-time hire.',
    includes: [
      'Dedicated creative lead',
      'Up to 20 hours/month',
      'Graphic design & layout',
      'Email campaign design',
      'Minor website updates',
      'Monthly strategy call',
    ],
    bestFor: 'Small teams needing reliable creative support.',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$7,500',
    period: '/month',
    hours: '40 hours',
    featured: true,
    description: 'A full creative partnership with strategic guidance, content production, and lead generation support.',
    includes: [
      'Everything in Essentials',
      'Up to 40 hours/month',
      'Content strategy & copywriting',
      'Landing page development',
      'Lead gen campaign management',
      'A/B testing & optimization',
      'Bi-weekly strategy calls',
      'Priority turnaround',
    ],
    bestFor: 'Growth-stage companies investing in consistent lead generation.',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    hours: 'Unlimited scope',
    description: 'Embedded creative team for organizations with high-volume, multi-channel needs.',
    includes: [
      'Everything in Growth',
      'Unlimited project scope',
      'Dedicated design team',
      'Brand guardian oversight',
      'Trade show & event support',
      'Video production',
      'Weekly strategy sessions',
      'Same-day turnaround available',
    ],
    bestFor: 'Enterprise companies and organizations preparing for major milestones.',
  },
]

export const processSteps = [
  {
    title: 'Understanding',
    description: 'We immerse ourselves in your business — your market, your competitors, your growth objectives — to build the strategic foundation.',
  },
  {
    title: 'Positioning',
    description: 'We develop the rationale that defines how your brand should be perceived in the marketplace and by your target audience.',
  },
  {
    title: 'Brand Meaning',
    description: 'We translate the rationale into visual identity, messaging, and creative direction that communicates with purpose.',
  },
  {
    title: 'Execution',
    description: 'We produce every deliverable — digital, print, web, event — with visual excellence and strategic alignment.',
  },
]

/* ================================================================
   INDUSTRY VERTICALS — Focused B2B sectors Hue serves
   ================================================================ */

export interface Industry {
  slug: string
  name: string
  headline: string
  description: string
  challenges: string[]
  solutions: string[]
  results: { metric: string; label: string }[]
  cta: string
}

export const industries: Industry[] = [
  {
    slug: 'architecture-engineering',
    name: 'Architecture & Engineering',
    headline: 'Design firms that look as good as the structures they build.',
    description: 'Architecture and engineering firms compete on reputation — yet most have brands that haven\'t evolved since the partnership was formed. We help AEC firms present the sophistication and capability that wins shortlists, attracts top talent, and commands premium fees.',
    challenges: [
      'Outdated brand that doesn\'t match the caliber of work',
      'Proposals and pitch decks that fail to differentiate',
      'Website that doesn\'t convert RFQ traffic into conversations',
      'No system for thought leadership or industry visibility',
    ],
    solutions: [
      'Brand identity that signals expertise and innovation',
      'Proposal and pitch deck templates that win shortlists',
      'Portfolio website built to convert visitors into leads',
      'Trade show and conference collateral',
    ],
    results: [
      { metric: '3x', label: 'Increase in qualified RFQ responses' },
      { metric: '60%', label: 'Faster proposal turnaround' },
      { metric: '45%', label: 'More website-generated leads' },
    ],
    cta: 'Build a brand that matches your portfolio.',
  },
  {
    slug: 'real-estate-development',
    name: 'Real Estate & Development',
    headline: 'Sell the vision before the first shovel hits the ground.',
    description: 'Real estate developers and commercial brokerages need to market projects that don\'t yet exist. We create compelling brand experiences — from pre-development branding to lease-up campaigns — that help prospects see the opportunity and act on it.',
    challenges: [
      'Marketing properties before they\'re built',
      'Differentiating from competing developments',
      'Generating pre-lease and pre-sale commitments',
      'Maintaining brand consistency across project portfolios',
    ],
    solutions: [
      'Project branding and naming',
      'Pre-development marketing websites',
      'Brochures, fly sheets, and investor decks',
      'Signage and environmental graphics',
    ],
    results: [
      { metric: '80%', label: 'Pre-leased before completion' },
      { metric: '2x', label: 'Investor presentation conversions' },
      { metric: '35%', label: 'Reduction in time-to-lease' },
    ],
    cta: 'Market your next project with confidence.',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    headline: 'Credibility is your currency. Make sure it\'s visible.',
    description: 'Law firms, accounting practices, and consulting groups earn trust through expertise — but that trust needs a visual language that reinforces authority. We help professional services firms look and communicate like the leaders they are.',
    challenges: [
      'Commoditized perception in a crowded market',
      'Website that reads like every other firm in the space',
      'Difficulty attracting high-value clients online',
      'Inconsistent brand across offices and partners',
    ],
    solutions: [
      'Distinctive brand positioning and visual identity',
      'Lead-generating website with attorney/advisor profiles',
      'Thought leadership content strategy',
      'Client onboarding and presentation materials',
    ],
    results: [
      { metric: '50%', label: 'Increase in website-sourced inquiries' },
      { metric: '4x', label: 'Content engagement improvement' },
      { metric: '28%', label: 'Growth in high-value client acquisition' },
    ],
    cta: 'Position your firm for the clients you want.',
  },
  {
    slug: 'hospitality-luxury',
    name: 'Hospitality & Luxury',
    headline: 'Experiences deserve to be felt before they\'re lived.',
    description: 'Hotels, resorts, and luxury brands sell on emotion and aspiration. We create brand experiences that make prospects feel the quality before they ever arrive — through elevated design, immersive digital experiences, and meticulous attention to detail.',
    challenges: [
      'Translating physical experience into digital presence',
      'Standing out in saturated luxury markets',
      'Attracting high-net-worth clientele consistently',
      'Maintaining brand integrity across touchpoints',
    ],
    solutions: [
      'Luxury brand identity and visual language',
      'Immersive website experiences',
      'Print collateral with premium finishes',
      'Environmental design and guest-facing materials',
    ],
    results: [
      { metric: '70%', label: 'Increase in direct bookings' },
      { metric: '3x', label: 'Social engagement improvement' },
      { metric: '40%', label: 'Higher average transaction value' },
    ],
    cta: 'Elevate your brand to match your experience.',
  },
  {
    slug: 'technology-saas',
    name: 'Technology & SaaS',
    headline: 'Complex products, clear message.',
    description: 'Tech companies often lead with features when buyers need to understand value. We bridge the gap between technical capability and market positioning — helping SaaS and tech companies communicate clearly, build trust, and accelerate their sales pipeline.',
    challenges: [
      'Explaining complex products to non-technical buyers',
      'Differentiating in feature-saturated markets',
      'Converting free users to paid customers',
      'Building brand recognition in B2B channels',
    ],
    solutions: [
      'Product positioning and messaging framework',
      'Conversion-focused website and landing pages',
      'Sales enablement content and demo materials',
      'Conference and event branding',
    ],
    results: [
      { metric: '55%', label: 'Improvement in trial-to-paid conversion' },
      { metric: '2.5x', label: 'Increase in qualified demo requests' },
      { metric: '40%', label: 'Faster sales cycle' },
    ],
    cta: 'Turn complexity into your competitive advantage.',
  },
  {
    slug: 'healthcare-wellness',
    name: 'Healthcare & Wellness',
    headline: 'Trust starts before the first appointment.',
    description: 'Healthcare providers, med-spas, and wellness brands need to communicate competence and care simultaneously. We create brands that feel warm yet authoritative — building patient confidence that begins the moment they discover you.',
    challenges: [
      'Building trust with prospective patients online',
      'Differentiating from corporate healthcare chains',
      'Converting website visitors into booked appointments',
      'Maintaining compliance while being creative',
    ],
    solutions: [
      'Patient-centered brand identity',
      'Appointment-driving website with provider profiles',
      'Patient education and marketing materials',
      'Referral program design and collateral',
    ],
    results: [
      { metric: '65%', label: 'Increase in online appointment bookings' },
      { metric: '3x', label: 'Patient referral program growth' },
      { metric: '45%', label: 'Improvement in patient acquisition cost' },
    ],
    cta: 'Build a practice patients choose first.',
  },
]

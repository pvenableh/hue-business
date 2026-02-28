/* ================================================================
   PORTFOLIO — Curated case studies & project showcase
   ================================================================
   Hard-coded for precise presentation.
   Images reference Directus asset URLs.
   ================================================================ */

export interface PortfolioProject {
  slug: string
  name: string
  client: string
  industry: string
  service: string
  year: string
  tagline: string
  description: string
  challenge: string
  approach: string
  results: { metric: string; label: string }[]
  deliverables: string[]
  testimonial?: {
    quote: string
    author: string
    title: string
  }
  featured?: boolean
}

export const services = [
  'All',
  'Brand Strategy',
  'Digital / Web',
  'Print & Collateral',
  'Lead Generation',
  'Trade Show',
  'Video',
] as const

export type ServiceFilter = (typeof services)[number]

export const projects: PortfolioProject[] = [
  {
    slug: 'meridian-capital',
    name: 'Meridian Capital',
    client: 'Meridian Capital Group',
    industry: 'Professional Services',
    service: 'Brand Strategy',
    year: '2024',
    tagline: 'Repositioning a legacy firm for modern institutional investors.',
    description: 'Meridian Capital needed to evolve from a regional advisory firm to a nationally recognized capital markets brand. We rebuilt their identity from the ground up — starting with positioning research and ending with a complete visual system that signals institutional credibility.',
    challenge: 'A 30-year-old firm with deep expertise but a dated visual presence. Their brand didn\'t match the caliber of deals they were closing or the clients they were attracting.',
    approach: 'We conducted competitive analysis across 40+ capital markets firms, interviewed key stakeholders, and developed a positioning framework anchored in "Precision Capital." The visual identity uses restrained typography, a refined color system, and meticulous spacing to communicate institutional authority.',
    results: [
      { metric: '3x', label: 'Increase in inbound inquiries' },
      { metric: '45%', label: 'More qualified leads via website' },
      { metric: '90%', label: 'Stakeholder approval on first presentation' },
    ],
    deliverables: ['Brand Strategy & Positioning', 'Visual Identity System', 'Brand Guidelines', 'Corporate Collateral Suite', 'Website Design & Development'],
    testimonial: {
      quote: 'Hue didn\'t just design a logo — they repositioned how the market perceives us. The brand now reflects the sophistication of our work.',
      author: 'David Chen',
      title: 'Managing Partner, Meridian Capital',
    },
    featured: true,
  },
  {
    slug: 'atlas-development',
    name: 'Atlas Development Group',
    client: 'Atlas Development',
    industry: 'Real Estate & Development',
    service: 'Digital / Web',
    year: '2024',
    tagline: 'Selling a $200M mixed-use development before breaking ground.',
    description: 'Atlas needed to pre-lease 80% of a luxury mixed-use development in a competitive market. We created a complete pre-development marketing ecosystem — from project branding to an immersive website experience that let prospects visualize the finished space.',
    challenge: 'Marketing a property that doesn\'t physically exist yet to sophisticated commercial tenants and residential buyers who expect to see and feel the space before committing.',
    approach: 'We developed the project brand "The Meridian at Wynwood" with environmental storytelling — using architectural renderings, lifestyle photography, and interactive floor plan tools to create an immersive digital experience. The lead generation system captured prospects at every stage of the decision funnel.',
    results: [
      { metric: '82%', label: 'Pre-leased before completion' },
      { metric: '2.4x', label: 'ROI on marketing investment' },
      { metric: '340+', label: 'Qualified leads in 90 days' },
    ],
    deliverables: ['Project Branding & Naming', 'Marketing Website', 'Interactive Floor Plans', 'Investor Presentation', 'Brochure Suite', 'Email Campaign'],
    featured: true,
  },
  {
    slug: 'cortland-architects',
    name: 'Cortland Architects',
    client: 'Cortland & Associates',
    industry: 'Architecture & Engineering',
    service: 'Brand Strategy',
    year: '2023',
    tagline: 'An architecture firm that finally looks as good as its buildings.',
    description: 'Cortland is a 45-person architecture firm specializing in healthcare and institutional projects. Despite winning prestigious awards, their brand felt generic and undifferentiated. We created a visual system that communicates the precision and humanity of their design philosophy.',
    challenge: 'Competing against larger national firms with bigger marketing budgets. Their proposals were strong on content but weak on visual presentation, losing them shortlist opportunities.',
    approach: 'We immersed ourselves in their project portfolio and client relationships, discovering their differentiator: every design decision traces back to patient or occupant wellbeing. We built the brand around "Architecture of Care" — a positioning that resonates with healthcare system decision-makers.',
    results: [
      { metric: '60%', label: 'Increase in RFQ shortlist appearances' },
      { metric: '5', label: 'New institutional clients in 12 months' },
      { metric: '35%', label: 'Faster proposal turnaround' },
    ],
    deliverables: ['Brand Positioning', 'Visual Identity', 'Portfolio Website', 'Proposal Template System', 'Pitch Deck', 'Trade Show Materials'],
  },
  {
    slug: 'vantage-health',
    name: 'Vantage Health Partners',
    client: 'Vantage Health',
    industry: 'Healthcare & Wellness',
    service: 'Lead Generation',
    year: '2024',
    tagline: 'Turning a clinic website into a patient acquisition engine.',
    description: 'Vantage Health operates a network of specialty clinics across South Florida. Their existing website was informational but passive — patients had to call to book. We redesigned the digital experience around online conversion, implementing booking integration, provider profiles, and targeted landing pages.',
    challenge: 'Multiple clinic locations with inconsistent branding and no centralized digital patient acquisition strategy. Marketing spend was unfocused and difficult to measure.',
    approach: 'We audited every patient touchpoint and identified three high-value service lines where online acquisition was feasible. We built targeted landing pages for each, integrated with their EHR scheduling system, and implemented a drip email campaign for patients who didn\'t convert immediately.',
    results: [
      { metric: '155%', label: 'Increase in online bookings' },
      { metric: '38%', label: 'Reduction in patient acquisition cost' },
      { metric: '$2.1M', label: 'Revenue attributed to digital leads' },
    ],
    deliverables: ['Website Redesign', 'Landing Pages (3)', 'Email Drip Campaign', 'Provider Profile System', 'Analytics Dashboard', 'Monthly Retainer'],
    featured: true,
  },
  {
    slug: 'nexgen-platforms',
    name: 'NexGen Platforms',
    client: 'NexGen Technologies',
    industry: 'Technology & SaaS',
    service: 'Digital / Web',
    year: '2023',
    tagline: 'Making complex infrastructure software feel simple and trustworthy.',
    description: 'NexGen builds enterprise data infrastructure for Fortune 500 companies. Their product is technically sophisticated but their marketing was speaking only to engineers — missing the C-suite buyers who control budget decisions. We repositioned their digital presence for business outcomes.',
    challenge: 'A brilliant technical product wrapped in impenetrable jargon. Sales cycle was 9+ months because prospects didn\'t understand the value proposition until deep into the demo process.',
    approach: 'We developed a messaging hierarchy: business value first, technical depth available on demand. The website redesign uses progressive disclosure — clean, outcome-focused headlines with expandable technical detail for those who want it.',
    results: [
      { metric: '55%', label: 'Shorter average sales cycle' },
      { metric: '2.8x', label: 'More demo requests per month' },
      { metric: '40%', label: 'Improvement in trial conversion' },
    ],
    deliverables: ['Messaging Framework', 'Website Redesign', 'Product Landing Pages', 'Sales Deck', 'Case Study Templates', 'Demo Environment UX'],
  },
  {
    slug: 'harborview-resort',
    name: 'Harborview Resort & Spa',
    client: 'Harborview Hospitality',
    industry: 'Hospitality & Luxury',
    service: 'Brand Strategy',
    year: '2024',
    tagline: 'A luxury resort brand that feels as good as the experience.',
    description: 'Harborview is a boutique resort on the Florida coast undergoing a $40M renovation. They needed a brand that would position them against international luxury competitors and justify a 30% rate increase post-renovation.',
    challenge: 'Transitioning from a well-liked regional resort to a luxury destination brand without alienating loyal returning guests.',
    approach: 'We developed a brand language rooted in "coastal sophistication" — warm but elevated, familiar but aspirational. Every touchpoint, from the website to the room key cards, reinforces the new positioning while honoring the property\'s heritage.',
    results: [
      { metric: '70%', label: 'Increase in direct bookings' },
      { metric: '32%', label: 'Higher average daily rate' },
      { metric: '4.8', label: 'Post-renovation guest satisfaction' },
    ],
    deliverables: ['Brand Strategy & Positioning', 'Visual Identity', 'Website', 'Print Collateral Suite', 'Environmental Signage', 'Guest Experience Materials'],
  },
  {
    slug: 'sterling-law',
    name: 'Sterling & Partners LLP',
    client: 'Sterling Law Group',
    industry: 'Professional Services',
    service: 'Print & Collateral',
    year: '2023',
    tagline: 'Collateral that wins before the case even starts.',
    description: 'Sterling is a litigation firm that competes for high-profile commercial cases. Their marketing materials needed to command the same authority as their courtroom presence.',
    challenge: 'Proposal packages that looked identical to every other firm. In a competitive pitch, the visual presentation wasn\'t differentiating their expertise.',
    approach: 'We designed a modular collateral system — capabilities brochure, case study templates, and pitch folders — using premium paper stocks, restrained typography, and a color system that feels serious without being stiff.',
    results: [
      { metric: '4x', label: 'Improvement in pitch win rate' },
      { metric: '28%', label: 'Growth in new client acquisition' },
      { metric: '100%', label: 'Partner satisfaction with materials' },
    ],
    deliverables: ['Capabilities Brochure', 'Case Study Templates', 'Pitch Folders', 'Business Cards', 'Letterhead System', 'Digital Presentation'],
  },
  {
    slug: 'summit-expo',
    name: 'Summit Engineering Expo',
    client: 'Summit Engineering Corp',
    industry: 'Architecture & Engineering',
    service: 'Trade Show',
    year: '2024',
    tagline: 'Owning the floor at the industry\'s biggest event.',
    description: 'Summit Engineering needed to make a statement at the AEC Industry Expo — their first major trade show in five years. We designed a booth experience and supporting collateral that generated more leads than their entire previous year\'s marketing.',
    challenge: 'Competing for attention against firms with 10x the booth budget. Summit needed maximum impact from a 20x30 space.',
    approach: 'We designed a clean, architecturally-minded booth that used the space itself as a brand statement — open sightlines, a central project showcase, and collateral that prospects actually wanted to keep. Every piece drove to a landing page with a free project consultation offer.',
    results: [
      { metric: '180+', label: 'Qualified leads from 3-day event' },
      { metric: '12', label: 'Meetings booked on-site' },
      { metric: '5x', label: 'ROI on event investment' },
    ],
    deliverables: ['Booth Design', 'Pop-up Banners', 'Brochures & Sell Sheets', 'Leave-behind Kits', 'Landing Page', 'Follow-up Email Campaign'],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProjectsByService(service: ServiceFilter): PortfolioProject[] {
  if (service === 'All') return projects
  return projects.filter((p) => p.service === service)
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return projects.find((p) => p.slug === slug)
}

<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="hue-section-dark relative overflow-hidden">
      <div class="hue-container relative z-10 py-36 text-center md:py-44 lg:py-56">
        <p ref="heroLabel" class="hue-label mb-6 tracking-[0.15em] text-white/40 opacity-0">
          B2B Creative Agency
        </p>
        <h1 ref="heroTitle" class="hue-display-xl mx-auto max-w-4xl text-white opacity-0">
          Brands That Command<br class="hidden md:block"> Attention and Generate Leads
        </h1>
        <p ref="heroSub" class="mx-auto mt-7 max-w-md text-[1.0625rem] leading-relaxed text-white/45 opacity-0">
          Strategic brand positioning and creative execution for growth-stage companies ready to dominate their market.
        </p>
        <div ref="heroCta" class="mt-12 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center">
          <NuxtLink to="/contact" class="hue-btn-ghost">
            Schedule a Discovery Call
          </NuxtLink>
          <NuxtLink to="/creative-services" class="hue-link text-white/60">
            View Services
            <Icon name="lucide:arrow-right" class="size-3.5" />
          </NuxtLink>
        </div>
      </div>
      <!-- Subtle gradient orb -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute -bottom-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />
      </div>
    </section>

    <!-- ═══ ANNOUNCEMENT / PROMO BAR ═══ -->
    <section class="border-b border-[var(--color-border)] bg-white px-6 py-4">
      <div class="hue-container flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center rounded-full bg-[var(--near-black)] px-2.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-wider text-white">
            Free
          </span>
          <p class="text-[0.8125rem] text-[var(--color-text-secondary)]">
            <strong class="font-medium text-[var(--color-text)]">Brand Perception Audit</strong>
            — 8 questions. 15 minutes. A custom presentation in 5 days.
          </p>
        </div>
        <NuxtLink to="/brand-audit" class="hue-link shrink-0 text-xs">
          Start Free Audit <Icon name="lucide:arrow-right" class="size-3" />
        </NuxtLink>
      </div>
    </section>

    <!-- ═══ INTRO / WHY HUE ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container-sm text-center">
        <div ref="introLine" class="mx-auto mb-10 h-px w-12 origin-center bg-[var(--silver)]" />
        <p ref="introEditorial" class="hue-editorial-lg mb-6 opacity-0">
          Rationale-first creative
        </p>
        <p ref="introBody" class="hue-body-lg mb-6 opacity-0">
          Every engagement begins with understanding your business — your market,
          competitive landscape, and growth objectives — before any design work
          starts. It ensures every creative deliverable is purposeful, aligned,
          and built to perform.
        </p>
        <p ref="introSmall" class="hue-body-sm opacity-0">
          Built for B2B. No social media gimmicks — just credible brands,
          qualified leads, and a commanding presence at trade shows and industry events.
        </p>
      </div>
    </section>

    <!-- ═══ SERVICES OVERVIEW ═══ -->
    <section ref="servicesSection" class="hue-section-alt px-6 py-20 md:py-28">
      <div class="hue-container">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3">What We Do</p>
          <h2 class="hue-display-lg">Service Packages</h2>
          <p class="mx-auto mt-4 max-w-md text-[0.9375rem] text-[var(--color-text-muted)]">
            Three tiers of engagement designed to scale with your growth. Every package is strategic, measurable, and built to generate results.
          </p>
        </div>

        <div class="grid items-start gap-5 lg:grid-cols-3">
          <div
            v-for="(pkg, index) in serviceOverview"
            :key="pkg.name"
            class="service-card hue-card flex flex-col px-8 py-9 opacity-0"
            :class="{ 'hue-card-featured': pkg.featured }"
          >
            <span class="hue-label-sm mb-3">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="hue-display-md mb-1.5">{{ pkg.name }}</h3>
            <p class="mb-5 text-[0.875rem] text-[var(--color-text-muted)]">{{ pkg.tagline }}</p>
            <div class="mb-6 flex items-baseline gap-2">
              <span class="hue-price-label">Starting at</span>
              <span class="hue-price">{{ pkg.price }}</span>
            </div>
            <p class="mb-6 flex-1 text-[0.8125rem] leading-relaxed text-[var(--color-text-secondary)]">
              {{ pkg.description }}
            </p>
            <NuxtLink to="/creative-services" :class="pkg.featured ? 'hue-btn' : 'hue-link'">
              Learn More
              <Icon name="lucide:arrow-right" class="size-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ RETAINER HIGHLIGHT ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container">
        <div class="grid items-center gap-16 lg:grid-cols-2">
          <div ref="retainerText">
            <p class="hue-overline mb-3">Ongoing Partnership</p>
            <h2 class="hue-display-lg mb-5">Monthly Retainer Services</h2>
            <p class="hue-body-lg mb-6">
              Not every company needs a one-time project. For teams that need consistent creative output,
              strategic guidance, and lead generation support — our retainer model gives you a dedicated
              creative partner without the overhead of a full-time hire.
            </p>
            <ul class="mb-8 space-y-2.5">
              <li v-for="item in retainerHighlights" :key="item" class="flex items-start gap-2.5">
                <span class="mt-1.5 block h-px w-3 shrink-0 bg-[var(--silver)]" />
                <span class="text-[0.875rem] text-[var(--color-text-secondary)]">{{ item }}</span>
              </li>
            </ul>
            <NuxtLink to="/creative-services#retainers" class="hue-btn">
              View Retainer Plans
              <Icon name="lucide:arrow-right" class="size-3.5" />
            </NuxtLink>
          </div>

          <!-- Metrics Grid -->
          <div ref="metricsGrid" class="hue-grid-bordered grid-cols-2">
            <div
              v-for="metric in retainerMetrics"
              :key="metric.label"
              class="metric-cell px-8 py-8 text-center"
            >
              <p class="mb-1 text-3xl font-medium text-[var(--color-text)]">{{ metric.value }}</p>
              <p class="text-[0.75rem] uppercase tracking-wider text-[var(--color-text-muted)]">{{ metric.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ INDUSTRIES ═══ -->
    <section class="hue-section-alt px-6 py-20 md:py-28">
      <div class="hue-container">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3">Industries</p>
          <h2 class="hue-display-lg">Built for B2B</h2>
          <p class="mx-auto mt-4 max-w-md text-[0.9375rem] text-[var(--color-text-muted)]">
            We specialize in industries where credibility, trust, and professional
            presence drive business decisions.
          </p>
        </div>

        <div ref="industriesGrid" class="hue-grid-bordered grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="ind in industryList"
            :key="ind.slug"
            :to="`/industries/${ind.slug}`"
            class="industry-cell px-6 py-8 text-center"
          >
            <h3 class="mb-1.5 text-[0.875rem] font-medium text-[var(--color-text)]">{{ ind.name }}</h3>
            <p class="text-[0.75rem] text-[var(--color-text-muted)]">{{ ind.tagline }}</p>
          </NuxtLink>
        </div>

        <div class="mt-10 text-center">
          <NuxtLink to="/industries" class="hue-link">
            View All Industries
            <Icon name="lucide:arrow-right" class="size-3.5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══ PROCESS ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container-md">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3">How We Work</p>
          <h2 class="hue-display-lg">Process Creates Meaning</h2>
        </div>
        <div ref="processGrid" class="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="process-step opacity-0"
          >
            <div class="hue-label-sm mb-2.5">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3 class="hue-display-sm mb-1.5">{{ step.title }}</h3>
            <p class="text-[0.875rem] leading-relaxed text-[var(--color-text-secondary)]">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ BRAND AUDIT CALLOUT ═══ -->
    <section class="hue-section-alt px-6 py-20 md:py-28">
      <div class="hue-container">
        <div class="mx-auto max-w-4xl overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-sm">
          <div class="grid items-center lg:grid-cols-5">
            <!-- Content -->
            <div class="px-8 py-10 lg:col-span-3 lg:px-12 lg:py-14">
              <div class="mb-4 flex items-center gap-3">
                <span class="inline-flex items-center rounded-full bg-[var(--near-black)] px-2.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-wider text-white">
                  Complimentary
                </span>
              </div>
              <h2 class="hue-display-lg mb-3">Brand Perception Audit</h2>
              <p class="hue-editorial-md mb-4" style="font-style: italic;">How is your brand really perceived?</p>
              <p class="mb-6 text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)]">
                Answer 8 questions about your brand. In 5 business days, we'll deliver a custom
                Brand Perception Presentation — complete with a visual mood board, positioning
                statement, and directional concepts. Free, confidential, no obligation.
              </p>
              <NuxtLink to="/brand-audit" class="hue-btn">
                Start Your Free Audit
                <Icon name="lucide:arrow-right" class="size-3.5" />
              </NuxtLink>
            </div>
            <!-- Stats -->
            <div class="border-t border-[var(--color-border)] bg-[var(--snow)] px-8 py-8 lg:col-span-2 lg:border-l lg:border-t-0 lg:py-14">
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <p class="hue-editorial-xl">15</p>
                  <p class="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Minutes</p>
                </div>
                <div class="text-center">
                  <p class="hue-editorial-xl">8</p>
                  <p class="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Questions</p>
                </div>
                <div class="text-center">
                  <p class="hue-editorial-xl">5</p>
                  <p class="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Day Delivery</p>
                </div>
                <div class="text-center">
                  <p class="hue-editorial-xl">$0</p>
                  <p class="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ EDITORIAL CALLOUT ═══ -->
    <section class="hue-section-dark px-6 py-28 text-center md:py-36">
      <div class="hue-container-sm">
        <p ref="editorialQuote" class="hue-editorial-xl text-white opacity-0">
          "Visual excellence is achieved through a process that is executed with a defined purpose."
        </p>
        <div ref="editorialLine" class="mx-auto mt-10 h-px w-12 origin-center bg-white/20" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { processSteps } from '~/data/services'

useSeoMeta({
  title: 'Hue Creative Agency — B2B Brand & Lead Generation',
  description: 'Strategic brand positioning, lead generation, and creative execution for growth-stage B2B companies. Packages starting at $15,000.',
  ogTitle: 'Hue Creative Agency — B2B Brand & Lead Generation',
  ogDescription: 'Strategic brand positioning and creative execution for growth-stage companies.',
})

// Hero refs
const heroLabel = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)
const heroCta = ref<HTMLElement | null>(null)

// Section refs
const introLine = ref<HTMLElement | null>(null)
const introEditorial = ref<HTMLElement | null>(null)
const introBody = ref<HTMLElement | null>(null)
const introSmall = ref<HTMLElement | null>(null)
const servicesSection = ref<HTMLElement | null>(null)
const retainerText = ref<HTMLElement | null>(null)
const metricsGrid = ref<HTMLElement | null>(null)
const industriesGrid = ref<HTMLElement | null>(null)
const processGrid = ref<HTMLElement | null>(null)
const editorialQuote = ref<HTMLElement | null>(null)
const editorialLine = ref<HTMLElement | null>(null)

const serviceOverview = [
  {
    name: 'Brand Foundation',
    tagline: 'Look like the company you\'re becoming',
    price: '$15,000',
    featured: false,
    description: 'Brand strategy, visual identity, and corporate collateral that establishes credibility and positions you for growth.',
  },
  {
    name: 'Growth Engine',
    tagline: 'Capture and convert leads consistently',
    price: '$30,000',
    featured: true,
    description: 'Full brand foundation plus a custom website, lead generation system, and everything needed to turn visitors into qualified leads.',
  },
  {
    name: 'Market Presence',
    tagline: 'Show up everywhere and dominate',
    price: '$50,000',
    featured: false,
    description: 'Complete growth engine plus trade show collateral, sales enablement materials, and ongoing strategic creative support.',
  },
]

const retainerHighlights = [
  'Dedicated creative lead who knows your brand',
  'Flexible monthly hours for any creative need',
  'Strategy calls to keep campaigns aligned',
  'Priority turnaround when deadlines are tight',
  'No long-term contracts — month-to-month available',
]

const retainerMetrics = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '92%', label: 'Client Retention' },
  { value: '48hr', label: 'Avg. Turnaround' },
  { value: '15+', label: 'Years Experience' },
]

const industryList = [
  { slug: 'architecture-engineering', name: 'Architecture & Engineering', tagline: 'Design firms that command premium fees' },
  { slug: 'real-estate-development', name: 'Real Estate & Development', tagline: 'Pre-development to lease-up' },
  { slug: 'professional-services', name: 'Professional Services', tagline: 'Law, accounting & consulting' },
  { slug: 'hospitality-luxury', name: 'Hospitality & Luxury', tagline: 'Hotels, resorts & lifestyle brands' },
  { slug: 'technology-saas', name: 'Technology & SaaS', tagline: 'Complex products, clear message' },
  { slug: 'healthcare-wellness', name: 'Healthcare & Wellness', tagline: 'Trust starts before the first visit' },
]

// Animations
const { heroEntrance, fadeUp, lineReveal, staggerChildren } = useScrollAnimations()

onMounted(async () => {
  await nextTick()

  // Hero entrance
  heroEntrance({
    label: heroLabel,
    title: heroTitle,
    subtitle: heroSub,
    cta: heroCta,
  })

  // Intro section
  lineReveal(introLine.value!)
  fadeUp([introEditorial.value!, introBody.value!, introSmall.value!], {
    stagger: 0.15,
    start: 'top 85%',
  })

  // Service cards
  staggerChildren(servicesSection.value!, '.service-card', {
    y: 36,
    stagger: 0.15,
  })

  // Retainer section
  fadeUp(retainerText.value!, { y: 30 })
  staggerChildren(metricsGrid.value!, '.metric-cell', {
    y: 20,
    stagger: 0.1,
  })

  // Industries
  staggerChildren(industriesGrid.value!, '.industry-cell', {
    y: 16,
    stagger: 0.06,
  })

  // Process steps
  staggerChildren(processGrid.value!, '.process-step', {
    y: 24,
    stagger: 0.12,
  })

  // Editorial quote
  fadeUp(editorialQuote.value!, { y: 24, duration: 1 })
  lineReveal(editorialLine.value!, { duration: 1.5 })
})
</script>

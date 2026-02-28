<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="hue-section-dark relative overflow-hidden">
      <div class="hue-container relative z-10 px-6 py-36 md:py-44 lg:py-52">
        <div class="mx-auto max-w-3xl">
          <p ref="heroLabel" class="hue-label mb-6 tracking-[0.15em] text-white/40 opacity-0">About Hue</p>
          <h1 ref="heroTitle" class="hue-display-xl text-white opacity-0">
            Boutique Experience<br>on Purpose
          </h1>
          <p ref="heroSub" class="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-white/45 opacity-0">
            Hue is a full-service creative agency. We are a boutique experience on purpose
            because we love a hands-on, holistic approach to design that creates meaningful
            brand experiences.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ WHY HUE ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container">
        <div class="grid items-center gap-16 lg:grid-cols-2">
          <div ref="whySection">
            <LayoutLogoVertical fill="grey" class="mb-8 !h-24 opacity-30" />
            <p class="hue-editorial-xl mb-6" style="font-style: italic;">Why</p>
            <p class="hue-body-lg mb-4">
              Defined as form and complexion, hue is subtle yet essential. This idea
              articulates the agency's motto: visual excellence is achieved through a
              process that is executed with a defined purpose.
            </p>
            <p class="hue-body mb-4">
              The result, although subtle, is fundamental to its strength. As a full-service
              creative marketing agency, Hue offers brand strategy, campaign management,
              media planning, and creative development and production for all things digital,
              print, web, corporate, and video.
            </p>
            <p class="hue-body">
              Our dedication to a hands-on, boutique approach means every project receives the
              attention, strategy, and creative excellence it deserves — no cookie-cutter
              solutions, no assembly lines.
            </p>
          </div>

          <div ref="valuesGrid" class="hue-grid-bordered grid-cols-2">
            <div
              v-for="value in companyValues"
              :key="value.title"
              class="value-cell px-6 py-8"
            >
              <div class="mb-3 text-[0.6rem] tracking-[0.3em] text-[var(--silver)]">{{ value.icon }}</div>
              <h3 class="mb-2 text-[0.875rem] font-medium text-[var(--color-text)]">{{ value.title }}</h3>
              <p class="text-[0.8125rem] leading-relaxed text-[var(--color-text-muted)]">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ APPROACH ═══ -->
    <section class="hue-section-alt px-6 py-20 md:py-28">
      <div class="hue-container-md">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3">Our Approach</p>
          <h2 class="hue-display-lg">Rationale-First Creative</h2>
        </div>
        <div ref="approachGrid" class="grid gap-12 lg:grid-cols-3">
          <div
            v-for="(pillar, index) in approachPillars"
            :key="pillar.title"
            class="approach-item text-center opacity-0"
          >
            <div class="hue-label-sm mb-4">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3 class="hue-display-md mb-3">{{ pillar.title }}</h3>
            <p class="text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)]">{{ pillar.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ B2B FOCUS ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container-sm text-center">
        <div ref="b2bLine" class="mx-auto mb-10 h-px w-12 origin-center bg-[var(--silver)]" />
        <p class="hue-editorial-lg mb-6">Built for B2B</p>
        <p class="hue-body-lg mb-6">
          We don't chase trends or create viral content. We build brands that earn
          credibility in boardrooms, at trade shows, and across the digital channels
          where B2B decision-makers actually spend their time.
        </p>
        <p class="hue-body-sm mb-10">
          Our clients are architecture firms, real estate developers, technology companies,
          professional services practices, and hospitality brands that need to look and
          communicate like the industry leaders they are.
        </p>
        <NuxtLink to="/industries" class="hue-link">
          See Our Industry Expertise
          <Icon name="lucide:arrow-right" class="size-3.5" />
        </NuxtLink>
      </div>
    </section>

    <!-- ═══ AUDIT CALLOUT ═══ -->
    <section class="border-y border-[var(--color-border)] px-6 py-12 md:py-14">
      <div class="hue-container">
        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div class="mb-2 flex items-center gap-2">
              <span class="inline-flex items-center rounded-full bg-[var(--near-black)] px-2 py-0.5 text-[0.55rem] font-medium uppercase tracking-wider text-white">Free</span>
              <p class="hue-label-sm">Brand Perception Audit</p>
            </div>
            <p class="max-w-md text-[0.875rem] text-[var(--color-text-muted)]">
              Curious how your brand is perceived? Our complimentary audit reveals the gap between where you are and where you could be.
            </p>
          </div>
          <NuxtLink to="/brand-audit" class="hue-link shrink-0">
            Start Free Audit
            <Icon name="lucide:arrow-right" class="size-3.5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══ LOCATIONS ═══ -->
    <section class="hue-section-alt px-6 py-20 md:py-28">
      <div class="hue-container-md">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3">Locations</p>
          <h2 class="hue-display-lg">Where We Work</h2>
        </div>
        <div ref="locGrid" class="grid gap-5 md:grid-cols-2">
          <div
            v-for="loc in locations"
            :key="loc.city"
            class="loc-card hue-card px-8 py-10 opacity-0"
          >
            <p class="hue-overline mb-2">{{ loc.region }}</p>
            <h3 class="hue-display-lg mb-3">{{ loc.city }}</h3>
            <p class="text-[0.9375rem] leading-relaxed text-[var(--color-text-muted)]">{{ loc.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="hue-section-dark px-6 py-28 text-center md:py-36">
      <div class="mx-auto max-w-md">
        <p class="hue-editorial-lg mb-6 text-white">
          Ready to work together?
        </p>
        <p class="mb-10 text-[0.9375rem] leading-relaxed text-white/45">
          We'd love to learn about your business and discuss how we can help your brand
          command the attention it deserves.
        </p>
        <NuxtLink to="/contact" class="hue-btn-ghost">
          Schedule a Discovery Call
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

useSeoMeta({
  title: 'About Hue | Boutique B2B Creative Agency | Miami Beach & New York',
  description: 'Hue is a boutique creative agency specializing in B2B brand strategy, lead generation, and creative execution. Rationale-first approach. Located in Miami Beach and New York.',
  ogTitle: 'About Hue | Boutique B2B Creative Agency',
  ogDescription: 'Boutique creative agency — hands-on, strategic, built for B2B. Miami Beach & New York.',
})

const heroLabel = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)
const whySection = ref<HTMLElement | null>(null)
const valuesGrid = ref<HTMLElement | null>(null)
const approachGrid = ref<HTMLElement | null>(null)
const b2bLine = ref<HTMLElement | null>(null)
const locGrid = ref<HTMLElement | null>(null)

const companyValues = [
  { icon: '◆', title: 'Strategic', description: 'Every decision is rooted in business rationale, not aesthetic preference.' },
  { icon: '○', title: 'Precise', description: 'Visual excellence through meticulous attention to craft and detail.' },
  { icon: '□', title: 'Purposeful', description: 'Nothing decorative. Every element serves the brand\'s growth objectives.' },
  { icon: '△', title: 'Accountable', description: 'Measurable outcomes tied to your business metrics, not vanity stats.' },
]

const approachPillars = [
  {
    title: 'Understand First',
    description: 'Before we design anything, we study your market, competitive landscape, and target audience. This strategic foundation ensures every creative decision has a clear rationale.',
  },
  {
    title: 'Build With Purpose',
    description: 'Every deliverable — from logo to landing page — is created to serve a specific business objective. Beautiful design that doesn\'t perform isn\'t good design.',
  },
  {
    title: 'Measure & Iterate',
    description: 'We establish baselines, track performance, and optimize. Creative excellence and measurable results aren\'t mutually exclusive — they\'re mutually dependent.',
  },
]

const locations = [
  {
    city: 'Miami Beach',
    region: 'South Florida',
    description: 'Our headquarters in the heart of South Beach. Where Latin American energy meets global ambition — the perfect environment for brands that refuse to blend in.',
  },
  {
    city: 'New York',
    region: 'Northeast',
    description: 'Our northeast presence serving the financial, professional services, and technology corridors of the tri-state area.',
  },
]

const { heroEntrance, fadeUp, lineReveal, staggerChildren } = useScrollAnimations()

onMounted(async () => {
  await nextTick()
  heroEntrance({ label: heroLabel, title: heroTitle, subtitle: heroSub })
  fadeUp(whySection.value!, { y: 30 })
  staggerChildren(valuesGrid.value!, '.value-cell', { y: 16, stagger: 0.1 })
  staggerChildren(approachGrid.value!, '.approach-item', { y: 24, stagger: 0.15 })
  lineReveal(b2bLine.value!)
  staggerChildren(locGrid.value!, '.loc-card', { y: 30, stagger: 0.15 })
})
</script>

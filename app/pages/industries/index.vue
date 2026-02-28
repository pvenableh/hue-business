<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="hue-section-alt">
      <div class="hue-container px-6 py-32 text-center md:py-40">
        <p ref="heroLabel" class="hue-label mb-5 opacity-0">Industries We Serve</p>
        <h1 ref="heroTitle" class="hue-display-xl opacity-0">Built for B2B</h1>
        <p ref="heroSub" class="mx-auto mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-[var(--color-text-secondary)] opacity-0">
          We specialize in industries where credibility, trust, and professional presence drive business decisions. Our process is designed for complex sales cycles and high-value relationships.
        </p>
      </div>
    </section>

    <!-- ═══ INDUSTRY LIST ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container">
        <div ref="industryGrid" class="grid gap-1">
          <NuxtLink
            v-for="industry in industries"
            :key="industry.slug"
            :to="`/industries/${industry.slug}`"
            class="industry-row group"
          >
            <div class="flex flex-col gap-4 border-b border-[var(--color-border)] py-10 transition-all duration-300 md:flex-row md:items-center md:justify-between">
              <div class="flex-1">
                <h2 class="hue-display-md mb-2 transition-all duration-300 group-hover:translate-x-2">
                  {{ industry.name }}
                </h2>
                <p class="max-w-xl text-[0.9375rem] text-[var(--color-text-muted)]">
                  {{ industry.headline }}
                </p>
              </div>
              <div class="flex items-center gap-6">
                <div class="hidden gap-4 md:flex">
                  <div v-for="result in industry.results.slice(0, 2)" :key="result.label" class="text-right">
                    <p class="text-lg font-medium text-[var(--color-text)]">{{ result.metric }}</p>
                    <p class="text-[0.6875rem] uppercase tracking-wider text-[var(--color-text-muted)]">{{ result.label }}</p>
                  </div>
                </div>
                <Icon
                  name="lucide:arrow-right"
                  class="size-4 text-[var(--silver)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-text)]"
                />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══ AUDIT CALLOUT ═══ -->
    <section class="hue-section-alt px-6 py-12 md:py-14">
      <div class="hue-container">
        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div class="mb-2 flex items-center gap-2">
              <span class="inline-flex items-center rounded-full bg-[var(--near-black)] px-2 py-0.5 text-[0.55rem] font-medium uppercase tracking-wider text-white">Free</span>
              <p class="hue-label-sm">Brand Perception Audit</p>
            </div>
            <p class="max-w-md text-[0.875rem] text-[var(--color-text-muted)]">
              Understand how your brand is perceived in your industry. 8 questions, a custom presentation in 5 days.
            </p>
          </div>
          <NuxtLink to="/brand-audit" class="hue-link shrink-0">
            Start Free Audit
            <Icon name="lucide:arrow-right" class="size-3.5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="hue-section-dark px-6 py-28 text-center md:py-36">
      <div class="mx-auto max-w-md">
        <p class="hue-editorial-lg mb-6 text-white">
          Don't see your industry?
        </p>
        <p class="mb-10 text-[0.9375rem] leading-relaxed text-white/45">
          Our rationale-first process works for any B2B company that values credibility
          and needs to generate qualified leads. Let's talk about your specific market.
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
import { industries } from '~/data/industries'

useSeoMeta({
  title: 'Industries We Serve | B2B Creative Agency | Hue',
  description: 'B2B creative services for architecture, real estate, professional services, hospitality, technology, and healthcare industries. Built for complex sales cycles.',
  ogTitle: 'Industries We Serve | Hue Creative Agency',
  ogDescription: 'B2B creative services built for industries where credibility drives business decisions.',
})

const heroLabel = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)
const industryGrid = ref<HTMLElement | null>(null)

const { heroEntrance, staggerChildren } = useScrollAnimations()

onMounted(async () => {
  await nextTick()
  heroEntrance({ label: heroLabel, title: heroTitle, subtitle: heroSub })
  staggerChildren(industryGrid.value!, '.industry-row', { y: 24, stagger: 0.1 })
})
</script>

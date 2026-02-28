<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="hue-section-dark">
      <div class="hue-container py-36 text-center md:py-44 lg:py-52">
        <p ref="heroLabel" class="hue-label mb-6 opacity-0">Creative Services</p>
        <h1 ref="heroTitle" class="hue-display-xl mb-7 opacity-0">Service Packages</h1>
        <p ref="heroSub" class="mx-auto max-w-[26rem] text-[1.0625rem] leading-relaxed text-white/50 opacity-0">
          Strategic brand positioning and creative execution for growth-stage companies.
        </p>
      </div>
    </section>

    <!-- ═══ INTRO ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container-sm text-center">
        <div class="hue-divider-diamond mb-8 reveal" />
        <p class="hue-body-lg mb-6 reveal reveal-delay-1">
          Every engagement begins with understanding your business — your market,
          competitive landscape, and growth objectives — before any design work
          starts. We call this our
          <strong class="text-[0.8125rem] font-medium uppercase tracking-wider text-[color:var(--color-text)]">
            rationale-first approach</strong>.
          It ensures every creative deliverable is purposeful, aligned, and built to perform.
        </p>
        <p class="hue-body-sm reveal reveal-delay-2">
          Built for B2B. No social media gimmicks — just credible brands,
          qualified leads, and a commanding presence at trade shows and industry events.
        </p>
      </div>
    </section>

    <!-- ═══ PACKAGES ═══ -->
    <section class="hue-section-alt px-6 py-16 md:py-24">
      <div class="mx-auto grid max-w-[1200px] items-start gap-5 lg:grid-cols-3">
        <div
          v-for="(pkg, index) in packages"
          :key="pkg.id"
          class="hue-card flex flex-col reveal"
          :class="{ 'hue-card-featured': pkg.featured }"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div
            class="border-b border-[color:var(--color-border)] px-8 pb-6"
            :class="pkg.featured ? 'pt-11' : 'pt-9'"
          >
            <span class="hue-label-sm mb-2 block">{{ String(index + 1).padStart(2, '0') }}</span>
            <h2 class="hue-display-md mb-1">{{ pkg.name }}</h2>
            <p class="mb-5 text-[0.875rem] text-[color:var(--color-text-muted)]">{{ pkg.tagline }}</p>
            <div class="flex items-baseline gap-2">
              <span class="hue-price-label">Starting at</span>
              <span class="hue-price">{{ pkg.price }}</span>
            </div>
          </div>

          <div class="flex-1 px-8 py-6">
            <div v-for="group in pkg.groups" :key="group.title" class="mb-6 last:mb-0">
              <h3 class="mb-2 flex items-center gap-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-[color:var(--color-text)]">
                <span class="hue-shape">{{ group.icon }}</span>
                {{ group.title }}
              </h3>
              <ul v-if="group.items.length" class="hue-list">
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>

          <div class="mt-auto border-t border-[color:var(--color-border)] px-8 pb-8 pt-6">
            <span class="mb-1 block text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-[color:var(--color-text)]">Best for:</span>
            <p class="mb-5 text-[0.875rem] leading-relaxed text-[color:var(--color-text-muted)]">{{ pkg.bestFor }}</p>
            <NuxtLink to="/contact" :class="pkg.featured ? 'hue-btn' : 'hue-link'">
              Get Started
              <Icon name="lucide:arrow-right" class="size-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ RETAINERS ═══ -->
    <section id="retainers" class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3 reveal">Monthly Retainers</p>
          <h2 class="hue-display-lg mb-2 reveal reveal-delay-1">Ongoing Creative Partnership</h2>
          <p class="mx-auto max-w-lg text-[0.9375rem] text-[color:var(--color-text-muted)] reveal reveal-delay-2">
            A dedicated creative team that knows your brand, your goals, and delivers consistently — without the overhead of full-time hires.
          </p>
        </div>

        <div class="grid items-start gap-5 lg:grid-cols-3">
          <div
            v-for="(plan, index) in retainerPlans"
            :key="plan.id"
            class="hue-card flex flex-col px-8 py-9 reveal"
            :class="{ 'hue-card-featured': plan.featured }"
            :style="{ transitionDelay: `${index * 150}ms` }"
          >
            <div :class="plan.featured ? 'pt-2' : ''">
              <span class="hue-label-sm mb-3 block">{{ plan.hours }}</span>
              <h3 class="hue-display-md mb-1">{{ plan.name }}</h3>
              <div class="mb-5 flex items-baseline gap-1">
                <span class="hue-price">{{ plan.price }}</span>
                <span v-if="plan.period" class="text-[0.75rem] text-[color:var(--color-text-muted)]">{{ plan.period }}</span>
              </div>
              <p class="mb-6 text-[0.8125rem] leading-relaxed text-[color:var(--color-text-secondary)]">
                {{ plan.description }}
              </p>
            </div>

            <div class="flex-1">
              <h4 class="mb-2 text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-[color:var(--color-text)]">
                <span class="hue-shape">◆</span> Includes
              </h4>
              <ul class="hue-list mb-6">
                <li v-for="item in plan.includes" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div class="mt-auto border-t border-[color:var(--color-border)] pt-6">
              <span class="mb-1 block text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-[color:var(--color-text)]">Best for:</span>
              <p class="mb-5 text-[0.875rem] leading-relaxed text-[color:var(--color-text-muted)]">{{ plan.bestFor }}</p>
              <NuxtLink to="/contact" :class="plan.featured ? 'hue-btn' : 'hue-link'">
                Get Started
                <Icon name="lucide:arrow-right" class="size-3.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ À LA CARTE ═══ -->
    <section id="alacarte" class="hue-section-alt px-6 py-20 md:py-28">
      <div class="hue-container-md">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3 reveal">À La Carte</p>
          <h2 class="hue-display-lg mb-2 reveal reveal-delay-1">Individual Services</h2>
          <p class="hue-body-sm">For focused projects or ongoing support after your initial engagement.</p>
        </div>
        <div class="hue-grid-bordered grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(service, i) in alacarteServices"
            :key="service.name"
            class="px-6 py-7 text-center reveal"
            :style="{ transitionDelay: `${i * 60}ms` }"
          >
            <div class="mb-2.5 text-[0.6rem] tracking-[0.3em] text-[color:var(--silver)]">{{ service.icon }}</div>
            <h3 class="mb-1.5 text-[0.875rem] font-medium text-[color:var(--color-text)]">{{ service.name }}</h3>
            <p class="text-[0.9375rem] text-[color:var(--color-text-muted)]">{{ service.price }}</p>
          </div>
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
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="reveal"
            :style="{ transitionDelay: `${index * 120}ms` }"
          >
            <div class="hue-label-sm mb-2.5">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3 class="hue-display-sm mb-1.5">{{ step.title }}</h3>
            <p class="text-[0.875rem] leading-relaxed text-[color:var(--color-text-secondary)]">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ AUDIT CALLOUT ═══ -->
    <section class="hue-section-alt px-6 py-16 md:py-20">
      <div class="hue-container">
        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div class="mb-2 flex items-center gap-2">
              <span class="inline-flex items-center rounded-full bg-[color:var(--near-black)] px-2 py-0.5 text-[0.55rem] font-medium uppercase tracking-wider text-white">Free</span>
              <p class="hue-label-sm">Brand Perception Audit</p>
            </div>
            <p class="max-w-md text-[0.875rem] text-[color:var(--color-text-muted)]">
              Not sure where to start? Take our complimentary brand audit — 8 questions, 15 minutes, a custom presentation in 5 days.
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
    <section class="hue-section-dark px-6 py-36 text-center md:py-44">
      <div class="mx-auto max-w-md">
        <h2 class="hue-display-lg mb-6 reveal">
          Let's Create What<br>is Possible
        </h2>
        <p class="mb-12 text-base leading-relaxed text-white/50 reveal reveal-delay-1">
          Ready to start your next project? We'd love to hear from you.
        </p>
        <NuxtLink to="/contact" class="hue-btn-ghost">Get in Touch</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { packages, alacarteServices, retainerPlans, processSteps } from '~/data/services'

useSeoMeta({
  title: 'Creative Services & Packages | B2B Branding | Hue Creative Agency',
  description: 'Strategic brand positioning, lead generation, and creative execution packages for growth-stage B2B companies. Packages starting at $15,000. Monthly retainers from $3,500/mo.',
  ogTitle: 'B2B Creative Services & Packages | Hue Creative Agency',
  ogDescription: 'Strategic brand positioning and creative execution packages for growth-stage companies.',
})

// ── GSAP Hero Animation ──────────────────────────
const heroLabel = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo(heroLabel.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
    .fromTo(heroTitle.value, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
    .fromTo(heroSub.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')

  // Scroll reveal (SSR-safe)
  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  }
})
</script>

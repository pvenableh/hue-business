<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="hue-section-dark">
      <div class="hue-container py-36 text-center md:py-44 lg:py-52">
        <p ref="heroLabel" class="hue-label mb-6 opacity-0">Selected Work</p>
        <h1 ref="heroTitle" class="hue-display-xl mb-7 opacity-0">Process Creates<br class="hidden md:block"> Meaning</h1>
        <p ref="heroSub" class="mx-auto max-w-[28rem] text-[1.0625rem] leading-relaxed text-white/50 opacity-0">
          A curated selection of brand, digital, and lead generation projects for B2B companies.
        </p>
      </div>
    </section>

    <!-- ═══ FILTER BAR ═══ -->
    <section class="sticky top-0 z-40 border-b border-[color:var(--color-border)] bg-white/90 backdrop-blur-xl">
      <div class="hue-container">
        <div class="hide-scrollbar flex gap-1 overflow-x-auto py-3">
          <button
            v-for="svc in services"
            :key="svc"
            class="filter-btn"
            :class="{ 'filter-btn--active': activeFilter === svc }"
            @click="activeFilter = svc"
          >
            {{ svc }}
          </button>
        </div>
      </div>
    </section>

    <!-- ═══ PROJECT GRID ═══ -->
    <section class="hue-section px-6 py-16 md:py-24">
      <div class="hue-container">
        <!-- Project count -->
        <p class="hue-label-sm mb-8">
          {{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'Project' : 'Projects' }}
        </p>

        <div class="grid gap-px overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-border)] md:grid-cols-2">
          <NuxtLink
            v-for="(project, index) in filteredProjects"
            :key="project.slug"
            :to="`/case-studies/${project.slug}`"
            class="project-cell group reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <!-- Project Info -->
            <div class="flex h-full flex-col justify-between bg-white p-8 transition-colors duration-300 group-hover:bg-[color:var(--snow)] md:p-10">
              <div>
                <!-- Meta row -->
                <div class="mb-6 flex items-center justify-between">
                  <span class="hue-label-sm">{{ project.service }}</span>
                  <span class="hue-label-sm">{{ project.year }}</span>
                </div>

                <!-- Title -->
                <h2 class="hue-display-md mb-2 transition-transform duration-300 group-hover:translate-x-1">
                  {{ project.name }}
                </h2>

                <!-- Client & Industry -->
                <p class="mb-4 text-[0.8125rem] text-[color:var(--color-text-muted)]">
                  {{ project.client }} · {{ project.industry }}
                </p>

                <!-- Tagline -->
                <p class="hue-editorial-md mb-6">{{ project.tagline }}</p>
              </div>

              <!-- Bottom: Results preview + Arrow -->
              <div class="flex items-end justify-between">
                <div class="flex gap-6">
                  <div v-for="result in project.results.slice(0, 2)" :key="result.label">
                    <p class="text-lg font-medium text-[color:var(--color-text)]">{{ result.metric }}</p>
                    <p class="text-[0.625rem] uppercase tracking-wider text-[color:var(--color-text-muted)]">{{ result.label }}</p>
                  </div>
                </div>
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-border)] transition-all duration-300 group-hover:border-[color:var(--near-black)] group-hover:bg-[color:var(--near-black)]">
                  <Icon name="lucide:arrow-right" class="size-3.5 text-[color:var(--silver)] transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══ EDITORIAL BREAK ═══ -->
    <section class="hue-section-alt px-6 py-20 text-center md:py-28">
      <div class="hue-container-sm">
        <p class="hue-pullquote reveal">
          Every project starts with<br class="hidden md:block"> understanding why.
        </p>
        <p class="mt-8 text-[0.875rem] text-[color:var(--color-text-muted)] reveal reveal-delay-1">
          Our rationale-first process ensures every deliverable is purposeful, aligned, and built to perform.
        </p>
      </div>
    </section>

    <!-- ═══ AUDIT CALLOUT ═══ -->
    <section class="hue-section px-6 py-16 md:py-20">
      <div class="hue-container">
        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div class="mb-2 flex items-center gap-2">
              <span class="inline-flex items-center rounded-full bg-[color:var(--near-black)] px-2 py-0.5 text-[0.55rem] font-medium uppercase tracking-wider text-white">Free</span>
              <p class="hue-label-sm">Brand Perception Audit</p>
            </div>
            <p class="max-w-md text-[0.875rem] text-[color:var(--color-text-muted)]">
              See where your brand stands before your next project. 8 questions, a custom presentation in 5 days.
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
        <h2 class="hue-display-lg mb-6 reveal text-white">
          Your Project Could<br>Be Next
        </h2>
        <p class="mb-10 text-[0.9375rem] leading-relaxed text-white/45 reveal reveal-delay-1">
          Let's discuss your brand, your market, and what success looks like for your business.
        </p>
        <NuxtLink to="/contact" class="hue-btn-ghost">
          Schedule a Discovery Call
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { projects, services, getProjectsByService, type ServiceFilter } from '~/data/portfolio'

useSeoMeta({
  title: 'Case Studies | B2B Branding & Lead Generation | Hue Creative Agency',
  description: 'Explore our B2B case studies in brand strategy, website design, and lead generation for architecture, real estate, technology, and professional services companies.',
  ogTitle: 'B2B Case Studies | Hue Creative Agency',
  ogDescription: 'Brand strategy and lead generation case studies for growth-stage B2B companies.',
})

const activeFilter = ref<ServiceFilter>('All')

const filteredProjects = computed(() => getProjectsByService(activeFilter.value))

// ── Hero animation ──────────────────────────────
const heroLabel = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo(heroLabel.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
    .fromTo(heroTitle.value, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
    .fromTo(heroSub.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')

  // Scroll reveal
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

// Re-init reveal when filter changes (new elements appear)
watch(activeFilter, async () => {
  await nextTick()
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
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))
  }
})
</script>

<style scoped>
.filter-btn {
  padding: 0.375rem 0.875rem;
  font-family: var(--font);
  font-weight: 500;
  font-size: 0.6875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: 980px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 300ms var(--ease);
}

.filter-btn:hover {
  color: var(--color-text);
}

.filter-btn--active {
  color: var(--color-text);
  border-color: var(--color-border-light);
  background: var(--snow);
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>

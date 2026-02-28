<template>
  <div v-if="project">
    <!-- ═══ HERO ═══ -->
    <section class="hue-section-alt">
      <div class="hue-container px-6 py-32 md:py-40">
        <div class="mx-auto max-w-3xl">
          <!-- Back link -->
          <NuxtLink to="/case-studies" class="hue-link mb-10 inline-flex text-[color:var(--color-text-muted)]">
            <Icon name="lucide:arrow-left" class="size-3.5" />
            All Case Studies
          </NuxtLink>

          <!-- Meta -->
          <div class="mb-6 flex flex-wrap items-center gap-3">
            <span class="hue-label-sm">{{ project.service }}</span>
            <span class="text-[0.5rem] text-[color:var(--silver)]">◆</span>
            <span class="hue-label-sm">{{ project.industry }}</span>
            <span class="text-[0.5rem] text-[color:var(--silver)]">◆</span>
            <span class="hue-label-sm">{{ project.year }}</span>
          </div>

          <!-- Title -->
          <h1 ref="heroTitle" class="hue-display-xl mb-4 opacity-0">{{ project.name }}</h1>

          <!-- Tagline -->
          <p ref="heroTagline" class="hue-editorial-lg mb-6 opacity-0">{{ project.tagline }}</p>

          <!-- Client -->
          <p ref="heroClient" class="hue-body-sm opacity-0">
            Client: {{ project.client }}
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ OVERVIEW ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container">
        <div class="mx-auto max-w-3xl">
          <p class="hue-body-lg reveal">{{ project.description }}</p>
        </div>
      </div>
    </section>

    <!-- ═══ CHALLENGE & APPROACH ═══ -->
    <section class="hue-section-alt px-6 py-20 md:py-28">
      <div class="hue-container">
        <div class="grid gap-16 lg:grid-cols-2">
          <!-- Challenge -->
          <div class="reveal">
            <p class="hue-overline mb-4">The Challenge</p>
            <h2 class="hue-display-lg mb-6">What we were solving</h2>
            <p class="hue-body-lg">{{ project.challenge }}</p>
          </div>

          <!-- Approach -->
          <div class="reveal reveal-delay-1">
            <p class="hue-overline mb-4">Our Approach</p>
            <h2 class="hue-display-lg mb-6">How we solved it</h2>
            <p class="hue-body-lg">{{ project.approach }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ RESULTS ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container-md">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3 reveal">Results</p>
          <h2 class="hue-display-lg reveal reveal-delay-1">Measurable Impact</h2>
        </div>

        <div class="hue-grid-bordered" :class="project.results.length === 3 ? 'grid-cols-3' : 'grid-cols-2 lg:grid-cols-4'">
          <div
            v-for="(result, i) in project.results"
            :key="result.label"
            class="px-8 py-10 text-center reveal"
            :style="{ transitionDelay: `${i * 100}ms` }"
          >
            <p class="mb-2 text-3xl font-medium text-[color:var(--color-text)] md:text-4xl">{{ result.metric }}</p>
            <p class="text-[0.6875rem] uppercase tracking-wider text-[color:var(--color-text-muted)]">{{ result.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ DELIVERABLES ═══ -->
    <section class="hue-section-alt px-6 py-20 md:py-28">
      <div class="hue-container-md">
        <div class="grid items-start gap-16 lg:grid-cols-5">
          <div class="lg:col-span-2">
            <p class="hue-label mb-3 reveal">Deliverables</p>
            <h2 class="hue-display-lg reveal reveal-delay-1">What We Produced</h2>
          </div>
          <div class="lg:col-span-3">
            <div class="grid grid-cols-2 gap-x-8 gap-y-3">
              <div
                v-for="(deliverable, i) in project.deliverables"
                :key="deliverable"
                class="flex items-start gap-2.5 reveal"
                :style="{ transitionDelay: `${i * 60}ms` }"
              >
                <span class="mt-2 block h-px w-3 shrink-0 bg-[color:var(--silver)]" />
                <span class="text-[0.875rem] text-[color:var(--color-text-secondary)]">{{ deliverable }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TESTIMONIAL ═══ -->
    <section v-if="project.testimonial" class="hue-section-dark px-6 py-24 md:py-32">
      <div class="hue-container-sm text-center">
        <p class="hue-pullquote mb-10 text-white reveal">
          "{{ project.testimonial.quote }}"
        </p>
        <div class="reveal reveal-delay-1">
          <p class="text-[0.875rem] font-medium text-white/70">{{ project.testimonial.author }}</p>
          <p class="hue-caption text-white/35">{{ project.testimonial.title }}</p>
        </div>
      </div>
    </section>

    <!-- ═══ NEXT PROJECT ═══ -->
    <section v-if="nextProject" class="hue-section border-t border-[color:var(--color-border)] px-6 py-16 md:py-20">
      <div class="hue-container">
        <NuxtLink :to="`/case-studies/${nextProject.slug}`" class="group flex items-center justify-between">
          <div>
            <p class="hue-label-sm mb-2">Next Project</p>
            <h3 class="hue-display-md transition-transform duration-300 group-hover:translate-x-1">{{ nextProject.name }}</h3>
            <p class="mt-1 text-[0.8125rem] text-[color:var(--color-text-muted)]">{{ nextProject.client }} · {{ nextProject.service }}</p>
          </div>
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-border)] transition-all duration-300 group-hover:border-[color:var(--near-black)] group-hover:bg-[color:var(--near-black)]">
            <Icon name="lucide:arrow-right" class="size-4 text-[color:var(--silver)] transition-colors duration-300 group-hover:text-white" />
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="hue-section-dark px-6 py-24 text-center md:py-32">
      <div class="mx-auto max-w-md">
        <p class="hue-editorial-lg mb-6 text-white reveal">Start your project.</p>
        <p class="mb-10 text-[0.9375rem] leading-relaxed text-white/45 reveal reveal-delay-1">
          We'd love to learn about your business and discuss how we can create something meaningful together.
        </p>
        <NuxtLink to="/contact" class="hue-btn-ghost">Schedule a Discovery Call</NuxtLink>
      </div>
    </section>
  </div>

  <!-- 404 fallback -->
  <div v-else class="flex min-h-[60vh] items-center justify-center">
    <div class="text-center">
      <h1 class="hue-display-lg mb-4">Project Not Found</h1>
      <NuxtLink to="/case-studies" class="hue-link">
        View All Case Studies <Icon name="lucide:arrow-right" class="size-3.5" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { projects, getProjectBySlug } from '~/data/portfolio'

const route = useRoute()
const project = computed(() => getProjectBySlug(route.params.slug as string))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

// Next project (circular)
const nextProject = computed(() => {
  if (!project.value) return null
  const idx = projects.findIndex((p) => p.slug === project.value!.slug)
  return projects[(idx + 1) % projects.length]
})

useSeoMeta({
  title: `${project.value.name} | Case Studies | Hue Creative Agency`,
  description: project.value.tagline,
  ogTitle: `${project.value.name} — Case Study | Hue`,
  ogDescription: project.value.tagline,
})

// ── Hero animation ──────────────────────────────
const heroTitle = ref<HTMLElement | null>(null)
const heroTagline = ref<HTMLElement | null>(null)
const heroClient = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo(heroTitle.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 })
    .fromTo(heroTagline.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .fromTo(heroClient.value, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')

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
</script>

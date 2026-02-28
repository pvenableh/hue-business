<template>
  <div v-if="industry">
    <!-- ═══ HERO ═══ -->
    <section class="hue-section-alt">
      <div class="hue-container px-6 py-32 md:py-40">
        <div class="mx-auto max-w-3xl">
          <p ref="heroLabel" class="hue-label mb-5 opacity-0">{{ industry.name }}</p>
          <h1 ref="heroTitle" class="hue-display-xl opacity-0">{{ industry.headline }}</h1>
          <p ref="heroSub" class="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--color-text-secondary)] opacity-0">
            {{ industry.description }}
          </p>
          <div ref="heroCta" class="mt-10 opacity-0">
            <NuxtLink to="/contact" class="hue-btn">
              Get Started
              <Icon name="lucide:arrow-right" class="size-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CHALLENGES & SOLUTIONS ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container">
        <div ref="csGrid" class="grid gap-16 lg:grid-cols-2">
          <!-- Challenges -->
          <div class="cs-col opacity-0">
            <p class="hue-overline mb-4">The Challenge</p>
            <h2 class="hue-display-lg mb-8">What holds most {{ industry.name.toLowerCase() }} firms back</h2>
            <ul class="space-y-4">
              <li v-for="challenge in industry.challenges" :key="challenge" class="flex items-start gap-3">
                <span class="mt-2 block h-px w-4 shrink-0 bg-[var(--silver)]" />
                <p class="text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)]">{{ challenge }}</p>
              </li>
            </ul>
          </div>

          <!-- Solutions -->
          <div class="cs-col opacity-0">
            <p class="hue-overline mb-4">Our Approach</p>
            <h2 class="hue-display-lg mb-8">How we solve it</h2>
            <ul class="space-y-4">
              <li v-for="solution in industry.solutions" :key="solution" class="flex items-start gap-3">
                <span class="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--near-black)]" />
                <p class="text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)]">{{ solution }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ RESULTS ═══ -->
    <section class="hue-section-alt px-6 py-20 md:py-28">
      <div class="hue-container-md">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3">Results</p>
          <h2 class="hue-display-lg">Measurable Impact</h2>
        </div>
        <div ref="resultsGrid" class="grid grid-cols-3 gap-8">
          <div
            v-for="result in industry.results"
            :key="result.label"
            class="result-item text-center opacity-0"
          >
            <p class="mb-2 text-4xl font-medium text-[var(--color-text)] md:text-5xl">{{ result.metric }}</p>
            <p class="text-[0.75rem] uppercase tracking-wider text-[var(--color-text-muted)]">{{ result.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="hue-section-dark px-6 py-28 text-center md:py-36">
      <div class="mx-auto max-w-md">
        <p class="hue-editorial-lg mb-6 text-white">{{ industry.cta }}</p>
        <p class="mb-10 text-[0.9375rem] leading-relaxed text-white/45">
          Schedule a discovery call to discuss your goals and how we can position your brand for growth.
        </p>
        <NuxtLink to="/contact" class="hue-btn-ghost">
          Schedule a Discovery Call
        </NuxtLink>
      </div>
    </section>
  </div>

  <!-- 404 fallback -->
  <div v-else class="flex min-h-[60vh] items-center justify-center">
    <div class="text-center">
      <h1 class="hue-display-lg mb-4">Industry Not Found</h1>
      <NuxtLink to="/industries" class="hue-link">
        View All Industries <Icon name="lucide:arrow-right" class="size-3.5" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { industries } from '~/data/industries'

const route = useRoute()
const industry = computed(() => industries.find((i) => i.slug === route.params.slug))

if (!industry.value) {
  throw createError({ statusCode: 404, statusMessage: 'Industry not found' })
}

useSeoMeta({
  title: `${industry.value.name} | Hue Creative Agency`,
  description: industry.value.description,
  ogTitle: `${industry.value.name} — Creative Services | Hue`,
  ogDescription: industry.value.headline,
})

const heroLabel = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)
const heroCta = ref<HTMLElement | null>(null)
const csGrid = ref<HTMLElement | null>(null)
const resultsGrid = ref<HTMLElement | null>(null)

const { heroEntrance, staggerChildren } = useScrollAnimations()

onMounted(async () => {
  await nextTick()
  heroEntrance({ label: heroLabel, title: heroTitle, subtitle: heroSub, cta: heroCta })
  staggerChildren(csGrid.value!, '.cs-col', { y: 30, stagger: 0.2 })
  staggerChildren(resultsGrid.value!, '.result-item', { y: 24, stagger: 0.15 })
})
</script>

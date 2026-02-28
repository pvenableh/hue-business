<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="hue-section-dark relative overflow-hidden">
      <div class="hue-container relative z-10 py-36 text-center md:py-44 lg:py-52">
        <p ref="heroLabel" class="hue-label mb-6 tracking-[0.15em] text-white/40 opacity-0">
          Complimentary Brand Assessment
        </p>
        <h1 ref="heroTitle" class="hue-display-xl mx-auto max-w-3xl text-white opacity-0">
          How is your brand<br class="hidden md:block">
          <span class="hue-editorial-xl" style="font-style: italic;">really</span> perceived?
        </h1>
        <p ref="heroSub" class="mx-auto mt-7 max-w-lg text-[1.0625rem] leading-relaxed text-white/45 opacity-0">
          Answer 8 simple questions. In 5 business days, we'll deliver a custom Brand Perception
          Presentation that shows you where your brand stands — and where it could go.
          Free, confidential, no obligation.
        </p>

        <!-- Stats Row -->
        <div ref="heroStatsEl" class="mt-14 flex flex-wrap justify-center gap-12 opacity-0 md:gap-16">
          <div v-for="stat in statsData" :key="stat.label" class="text-center">
            <p class="hue-editorial-xl text-white">{{ stat.value }}</p>
            <p class="mt-1 text-[0.65rem] uppercase tracking-[0.15em] text-white/35">{{ stat.label }}</p>
          </div>
        </div>

        <div ref="heroCta" class="mt-12 opacity-0">
          <a href="#audit-form" class="hue-btn-ghost">
            Start Your Free Audit
            <Icon name="lucide:arrow-down" class="size-3.5" />
          </a>
        </div>
      </div>
      <!-- Subtle gradient orb -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute -bottom-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />
      </div>
    </section>

    <!-- ═══ HOW IT WORKS ═══ -->
    <section class="hue-section-alt px-6 py-20 md:py-28">
      <div class="hue-container-md">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3 reveal">The Process</p>
          <h2 class="hue-display-lg reveal reveal-delay-1">
            How the <span class="hue-editorial-lg" style="font-style: italic;">audit</span> works
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div
            v-for="(step, i) in processSteps"
            :key="step.title"
            class="text-center reveal"
            :style="{ transitionDelay: `${i * 150}ms` }"
          >
            <p class="hue-editorial-xl mb-3 text-[color:var(--cloud)]">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3 class="hue-display-sm mb-2">{{ step.title }}</h3>
            <p class="text-[0.875rem] leading-relaxed text-[color:var(--color-text-secondary)]">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ WHAT YOU RECEIVE ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container-md">
        <div class="mb-14 text-center">
          <p class="hue-label mb-3 reveal">Deliverables</p>
          <h2 class="hue-display-lg mb-4 reveal reveal-delay-1">
            What you'll <span class="hue-editorial-lg" style="font-style: italic;">receive</span>
          </h2>
          <p class="mx-auto max-w-md text-[0.9375rem] text-[color:var(--color-text-muted)] reveal reveal-delay-2">
            A 10–15 slide presentation built from your answers, delivered under NDA:
          </p>
        </div>

        <div class="hue-grid-bordered grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(item, i) in deliverables"
            :key="item.title"
            class="px-6 py-8 text-center reveal"
            :style="{ transitionDelay: `${i * 100}ms` }"
          >
            <h4 class="mb-2 text-[0.875rem] font-medium text-[color:var(--color-text)]">{{ item.title }}</h4>
            <p class="text-[0.8125rem] leading-relaxed text-[color:var(--color-text-muted)]">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SOCIAL PROOF ═══ -->
    <section class="hue-section-alt px-6 py-16 md:py-20">
      <div class="hue-container-sm text-center">
        <p class="hue-pullquote reveal">
          "The brand perception audit completely changed how we approached our rebrand. In 15 minutes, they uncovered insights our team had missed for years."
        </p>
        <div class="mt-8 reveal reveal-delay-1">
          <p class="text-[0.875rem] font-medium text-[color:var(--color-text)]">Sarah Chen</p>
          <p class="hue-caption">CMO, Cortland Architects</p>
        </div>
      </div>
    </section>

    <!-- ═══ FORM SECTION ═══ -->
    <section id="audit-form" class="hue-section-dark px-6 py-24 md:py-32">
      <div class="mx-auto max-w-[640px]">
        <div class="mb-12 text-center">
          <h2 class="hue-display-lg mb-4 text-white">
            Start your <span class="hue-editorial-lg text-white" style="font-style: italic;">audit</span>
          </h2>
          <p class="text-[0.9375rem] text-white/40">
            Take your time with the "why" — that's where the real brand insight lives.
          </p>
          <div class="mt-6 flex items-center justify-center gap-3">
            <span class="h-px w-6 bg-white/15" />
            <span class="text-[0.7rem] uppercase tracking-[0.12em] text-white/25">Delivered Under NDA</span>
            <span class="h-px w-6 bg-white/15" />
          </div>
        </div>

        <form @submit.prevent="handleSubmit">
          <!-- Contact Info -->
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label class="audit-label">First Name *</label>
              <input v-model="form.firstName" type="text" class="audit-input" placeholder="First name" required />
            </div>
            <div>
              <label class="audit-label">Last Name *</label>
              <input v-model="form.lastName" type="text" class="audit-input" placeholder="Last name" required />
            </div>
          </div>

          <div class="mt-5">
            <label class="audit-label">Email *</label>
            <input v-model="form.email" type="email" class="audit-input" placeholder="you@company.com" required />
          </div>

          <div class="mt-5">
            <label class="audit-label">Company / Organization *</label>
            <input v-model="form.company" type="text" class="audit-input" placeholder="Your business name" required />
          </div>

          <div class="mt-5">
            <label class="audit-label">Industry</label>
            <select v-model="form.industry" class="audit-input audit-select">
              <option value="">Select your industry</option>
              <option v-for="ind in industryOptions" :key="ind" :value="ind">{{ ind }}</option>
            </select>
          </div>

          <div class="mt-5">
            <label class="audit-label">Website (if applicable)</label>
            <input v-model="form.website" type="url" class="audit-input" placeholder="https://yoursite.com" />
          </div>

          <!-- Divider -->
          <hr class="my-10 border-t border-white/[0.06]" />

          <!-- The 8 Questions -->
          <div
            v-for="(q, i) in questions"
            :key="i"
            class="mb-8"
          >
            <p class="hue-editorial-lg mb-1 text-white/60">{{ String(i + 1).padStart(2, '0') }}</p>
            <p class="mb-2 text-[0.95rem] leading-relaxed text-white/80">{{ q.text }}</p>
            <p class="mb-3 text-[0.75rem] italic text-white/30">{{ q.hint }}</p>
            <textarea
              v-model="form.answers[i]"
              class="audit-input audit-textarea"
              placeholder="Your answer..."
              required
            />
          </div>

          <button
            type="submit"
            class="mt-6 w-full bg-white py-4 text-center text-[0.8rem] font-medium uppercase tracking-[0.15em] text-[color:var(--near-black)] transition-all duration-300 hover:bg-white/90"
            :disabled="submitting"
          >
            {{ submitting ? 'Submitting...' : 'Submit & Request Your Free Audit' }}
          </button>

          <p class="mt-5 text-center text-[0.75rem] text-white/20">
            Your responses are confidential and protected under NDA.<br />
            Hue Creative Agency · 605 Lincoln Road · Miami Beach
          </p>
        </form>

        <!-- Success State -->
        <div
          v-if="submitted"
          class="mt-10 border border-white/10 p-10 text-center"
        >
          <div class="mb-4 text-2xl text-white/70">✓</div>
          <h3 class="hue-display-sm mb-3 text-white">Audit Request Received</h3>
          <p class="text-[0.875rem] leading-relaxed text-white/45">
            Thank you. We'll review your responses and deliver your custom Brand Perception
            Presentation within 5 business days. Check your inbox for a confirmation email.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

useSeoMeta({
  title: 'Free Brand Perception Audit | Hue Creative Agency Miami Beach',
  description: 'Get a complimentary brand perception audit from Miami Beach\'s rationale-driven creative agency. 8 questions. 15 minutes. A custom brand presentation in 5 days.',
  ogTitle: 'Free Brand Perception Audit | Hue Creative Agency',
  ogDescription: '8 questions. 15 minutes. A custom Brand Perception Presentation delivered in 5 business days. Free, confidential, no obligation.',
})

// Hero refs
const heroLabel = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)
const heroStatsEl = ref<HTMLElement | null>(null)
const heroCta = ref<HTMLElement | null>(null)

const statsData = [
  { value: '15', label: 'Minutes' },
  { value: '8', label: 'Questions' },
  { value: '5', label: 'Day Delivery' },
  { value: '$0', label: 'Cost' },
]

const processSteps = [
  {
    title: 'You Answer',
    description: 'Complete 8 brand perception questions below. Focus on the "why" — that\'s where the insight lives.',
  },
  {
    title: 'We Analyze',
    description: 'Our team develops a strategic assessment based on your answers, your market, and your competitive landscape.',
  },
  {
    title: 'You Receive',
    description: 'A custom Brand Perception Presentation delivered under NDA within 5 business days.',
  },
]

const deliverables = [
  { title: 'Visual Mood Board', description: 'A curated visual direction based on your own words and aspirations' },
  { title: 'Positioning Statement', description: 'A preliminary strategic narrative defining who you are in the market' },
  { title: 'Perception Gap Analysis', description: 'Where you are today vs. where you want to be — visualized clearly' },
  { title: 'Directional Concepts', description: '2–3 visual directions showing how the rationale could manifest' },
]

const questions = [
  { text: 'If your brand was a color, what would it be and why?', hint: 'Focus on why — the emotion, not just the hue.' },
  { text: 'If your brand walked into a room, how would people describe it?', hint: 'Think personality, energy, first impression.' },
  { text: 'What is the one thing you want someone to feel after interacting with your brand?', hint: 'Not what they should think — what they should feel.' },
  { text: 'Who is your brand NOT for?', hint: 'Exclusion often reveals more than inclusion.' },
  { text: 'What\'s the biggest misconception people have about your business?', hint: 'The gap between perception and reality is where brand strategy lives.' },
  { text: 'If you could only say one sentence to a potential client, what would it be?', hint: 'This tests the clarity of your value proposition.' },
  { text: 'What brand (in any industry) do you admire most, and why?', hint: 'This reveals your aesthetic and strategic aspirations.' },
  { text: 'Where do you see your business in 3 years, and what role does your brand play in getting there?', hint: 'Connects brand to business strategy.' },
]

const industryOptions = [
  'Architecture & Design',
  'Construction & Development',
  'Real Estate',
  'Community / Economic Development',
  'Events & Hospitality',
  'Lifestyle & Wellness',
  'Professional Services',
  'Technology & SaaS',
  'Healthcare',
  'Other',
]

// Form state
const submitting = ref(false)
const submitted = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  industry: '',
  website: '',
  answers: Array(8).fill('') as string[],
})

async function handleSubmit() {
  submitting.value = true
  // Simulate submission (replace with actual API call)
  await new Promise((resolve) => setTimeout(resolve, 1500))
  submitting.value = false
  submitted.value = true
  // Scroll to success message
  await nextTick()
  document.querySelector('.mt-10.border')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

// ── Animations ──────────────────────────────
onMounted(async () => {
  await nextTick()

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo(heroLabel.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
    .fromTo(heroTitle.value, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
    .fromTo(heroSub.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .fromTo(heroStatsEl.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .fromTo(heroCta.value, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')

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

<style scoped>
.audit-label {
  display: block;
  font-family: var(--font);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
}

.audit-input {
  width: 100%;
  padding: 0.875rem 1.125rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  font-family: var(--font);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 300ms var(--ease);
}

.audit-input:focus {
  border-color: rgba(255, 255, 255, 0.3);
}

.audit-input::placeholder {
  color: rgba(255, 255, 255, 0.25);
}

.audit-select {
  appearance: none;
  cursor: pointer;
}

.audit-select option {
  background: var(--near-black);
  color: white;
}

.audit-textarea {
  min-height: 100px;
  resize: vertical;
}
</style>

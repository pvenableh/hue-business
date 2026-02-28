<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="hue-section-alt">
      <div class="hue-container px-6 py-32 text-center md:py-40">
        <p ref="heroLabel" class="hue-label mb-5 opacity-0">Get Started</p>
        <h1 ref="heroTitle" class="hue-display-xl opacity-0">Let's Talk About<br class="hidden md:block"> Your Brand</h1>
        <p ref="heroSub" class="mx-auto mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-[var(--color-text-secondary)] opacity-0">
          Tell us about your project. We'll schedule a discovery call to discuss your goals, challenges, and how we can help.
        </p>
      </div>
    </section>

    <!-- ═══ FORM & INFO ═══ -->
    <section class="hue-section px-6 py-20 md:py-28">
      <div class="hue-container">
        <div class="grid gap-16 lg:grid-cols-5">
          <!-- Form -->
          <div class="lg:col-span-3">
            <form ref="formEl" @submit.prevent="handleSubmit" class="space-y-8">
              <!-- Contact Info -->
              <div>
                <h2 class="hue-display-sm mb-6">Contact Information</h2>
                <div class="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label for="firstName" class="hue-label mb-1.5 block">First Name *</label>
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      required
                      class="form-input"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label for="lastName" class="hue-label mb-1.5 block">Last Name *</label>
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      required
                      class="form-input"
                      placeholder="Smith"
                    />
                  </div>
                  <div>
                    <label for="email" class="hue-label mb-1.5 block">Email *</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="form-input"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label for="phone" class="hue-label mb-1.5 block">Phone</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="form-input"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label for="company" class="hue-label mb-1.5 block">Company *</label>
                    <input
                      id="company"
                      v-model="form.company"
                      type="text"
                      required
                      class="form-input"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>

              <!-- Project Details -->
              <div>
                <h2 class="hue-display-sm mb-6">Project Details</h2>

                <div class="mb-5">
                  <label class="hue-label mb-3 block">What are you interested in? *</label>
                  <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    <button
                      v-for="interest in interestOptions"
                      :key="interest"
                      type="button"
                      class="interest-btn"
                      :class="{ 'interest-btn--active': form.interests.includes(interest) }"
                      @click="toggleInterest(interest)"
                    >
                      {{ interest }}
                    </button>
                  </div>
                </div>

                <div class="mb-5">
                  <label for="budget" class="hue-label mb-1.5 block">Budget Range</label>
                  <select id="budget" v-model="form.budget" class="form-input">
                    <option value="">Select a range</option>
                    <option value="<20k">Under $20,000</option>
                    <option value="20k-50k">$20,000 – $50,000</option>
                    <option value="50k-100k">$50,000 – $100,000</option>
                    <option value="100k+">$100,000+</option>
                    <option value="retainer">Monthly retainer</option>
                  </select>
                </div>

                <div class="mb-5">
                  <label for="timeline" class="hue-label mb-1.5 block">Timeline</label>
                  <select id="timeline" v-model="form.timeline" class="form-input">
                    <option value="">Select a timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-3m">1–3 months</option>
                    <option value="3-6m">3–6 months</option>
                    <option value="6m+">6+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="hue-label mb-1.5 block">Tell us about your project</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    class="form-input resize-none"
                    placeholder="What are your goals? What challenges are you facing? Any context helps us prepare for our conversation."
                  />
                </div>
              </div>

              <button type="submit" class="hue-btn" :disabled="submitting">
                <span v-if="!submitting">Submit Request</span>
                <span v-else>Sending...</span>
                <Icon v-if="!submitting" name="lucide:arrow-right" class="size-3.5" />
              </button>
            </form>

            <!-- Success State -->
            <div v-if="submitted" class="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--snow)] p-8 text-center">
              <div class="mb-4 text-2xl">✓</div>
              <h3 class="hue-display-sm mb-2">Thank you</h3>
              <p class="hue-body-sm">
                We'll review your request and respond within 1–2 business days to schedule your discovery call.
              </p>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-2">
            <div class="sticky top-32 space-y-10">
              <!-- What to Expect -->
              <div>
                <h3 class="hue-display-sm mb-4">What to Expect</h3>
                <ol class="space-y-4">
                  <li v-for="(step, i) in expectSteps" :key="step" class="flex items-start gap-3">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--cloud)] text-[0.625rem] font-medium text-[var(--color-text)]">
                      {{ i + 1 }}
                    </span>
                    <p class="text-[0.875rem] text-[var(--color-text-secondary)]">{{ step }}</p>
                  </li>
                </ol>
              </div>

              <!-- Contact Info -->
              <div class="border-t border-[var(--color-border)] pt-8">
                <h3 class="hue-display-sm mb-4">Direct Contact</h3>
                <div class="space-y-3 text-[0.875rem] text-[var(--color-text-secondary)]">
                  <p>hello@huestudios.com</p>
                </div>
              </div>

              <!-- Free Audit -->
              <div class="border-t border-[var(--color-border)] pt-8">
                <div class="rounded-lg bg-[var(--snow)] p-5">
                  <div class="mb-2 flex items-center gap-2">
                    <span class="inline-flex items-center rounded-full bg-[var(--near-black)] px-2 py-0.5 text-[0.55rem] font-medium uppercase tracking-wider text-white">Free</span>
                  </div>
                  <h3 class="mb-1.5 text-[0.875rem] font-medium text-[var(--color-text)]">Not ready to commit?</h3>
                  <p class="mb-3 text-[0.8125rem] leading-relaxed text-[var(--color-text-muted)]">
                    Try our complimentary Brand Perception Audit — 8 questions, a custom presentation in 5 days.
                  </p>
                  <NuxtLink to="/brand-audit" class="hue-link text-xs">
                    Start Free Audit <Icon name="lucide:arrow-right" class="size-3" />
                  </NuxtLink>
                </div>
              </div>

              <!-- Locations -->
              <div class="border-t border-[var(--color-border)] pt-8">
                <h3 class="hue-display-sm mb-4">Locations</h3>
                <div class="space-y-4">
                  <div>
                    <p class="text-[0.6875rem] font-medium uppercase tracking-wider text-[var(--color-text)]">Miami Beach</p>
                    <p class="text-[0.8125rem] text-[var(--color-text-muted)]">South Florida HQ</p>
                  </div>
                  <div>
                    <p class="text-[0.6875rem] font-medium uppercase tracking-wider text-[var(--color-text)]">New York</p>
                    <p class="text-[0.8125rem] text-[var(--color-text-muted)]">Northeast Office</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

useSeoMeta({
  title: 'Contact | Hue Creative Agency',
  description: 'Schedule a discovery call to discuss your brand, lead generation, and creative needs. We work with growth-stage B2B companies.',
  ogTitle: 'Get Started | Hue Creative Agency',
  ogDescription: 'Tell us about your project and we\'ll schedule a discovery call.',
})

const heroLabel = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)
const formEl = ref<HTMLElement | null>(null)

const submitting = ref(false)
const submitted = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  interests: [] as string[],
  budget: '',
  timeline: '',
  message: '',
})

const interestOptions = [
  'Brand Strategy',
  'Visual Identity',
  'Website',
  'Lead Generation',
  'Trade Show',
  'Monthly Retainer',
]

const expectSteps = [
  'We review your submission and prepare for our call',
  '30-minute discovery call to understand your goals',
  'We send a tailored proposal within 5 business days',
  'Kick off with a strategic deep-dive into your market',
]

function toggleInterest(interest: string) {
  const idx = form.interests.indexOf(interest)
  if (idx >= 0) {
    form.interests.splice(idx, 1)
  } else {
    form.interests.push(interest)
  }
}

async function handleSubmit() {
  submitting.value = true
  // Simulate submission (replace with actual API call)
  await new Promise((resolve) => setTimeout(resolve, 1500))
  submitting.value = false
  submitted.value = true
}

const { heroEntrance, fadeUp } = useScrollAnimations()

onMounted(async () => {
  await nextTick()
  heroEntrance({ label: heroLabel, title: heroTitle, subtitle: heroSub })
  fadeUp(formEl.value!, { y: 20, start: 'top 90%' })
})
</script>

<style scoped>
.form-input {
  width: 100%;
  padding: 0.65rem 0.875rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-text);
  background: var(--white);
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  outline: none;
  transition: border-color 300ms var(--ease), box-shadow 300ms var(--ease);
}

.form-input:focus {
  border-color: var(--silver);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.04);
}

.form-input::placeholder {
  color: var(--silver);
}

.interest-btn {
  padding: 0.5rem 0.75rem;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--color-text-secondary);
  background: var(--white);
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  cursor: pointer;
  transition: all 300ms var(--ease);
}

.interest-btn:hover {
  border-color: var(--silver);
  background: var(--snow);
}

.interest-btn--active {
  background: var(--near-black);
  color: var(--white);
  border-color: var(--near-black);
}

.interest-btn--active:hover {
  background: #333;
  border-color: #333;
}
</style>

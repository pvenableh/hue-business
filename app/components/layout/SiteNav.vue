<template>
  <header
    ref="headerEl"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent',
      hidden ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <nav class="hue-container flex items-center justify-between py-4">
      <!-- Logo -->
      <LayoutLogoHorizontal :fill="scrolled ? 'dark' : logoFill" />

      <!-- Desktop Navigation -->
      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link hue-label"
          :class="{ 'text-white/70 hover:text-white': !scrolled && logoFill === 'light' }"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact" class="hue-btn text-xs">
          Get Started
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="flex items-center justify-center md:hidden"
        :class="scrolled ? 'text-[var(--near-black)]' : (logoFill === 'light' ? 'text-white' : 'text-[var(--near-black)]')"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="border-t border-[var(--color-border)] bg-white px-6 pb-8 pt-4 md:hidden"
      >
        <div class="flex flex-col gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block py-3 text-[0.8125rem] font-medium uppercase tracking-[0.06em] text-[var(--color-text-secondary)]"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="mt-4 border-t border-[var(--color-border)] pt-4">
            <NuxtLink to="/contact" class="hue-btn w-full text-center" @click="mobileOpen = false">
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  logoFill?: 'dark' | 'light' | 'grey'
}>()

const navLinks = [
  { label: 'Work', to: '/case-studies' },
  { label: 'Services', to: '/creative-services' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const mobileOpen = ref(false)
const scrolled = ref(false)
const hidden = ref(false)
const lastScroll = ref(0)
const headerEl = ref<HTMLElement | null>(null)

onMounted(() => {
  const onScroll = () => {
    const y = window.scrollY
    scrolled.value = y > 60
    hidden.value = y > 300 && y > lastScroll.value
    lastScroll.value = y
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => { mobileOpen.value = false })
</script>

<style scoped>
.nav-link {
  position: relative;
  transition: color 300ms var(--ease), opacity 300ms var(--ease);
}

.nav-link:hover {
  opacity: 0.6;
}

.nav-link.router-link-active {
  color: var(--color-text);
}
</style>

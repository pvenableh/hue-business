<template>
  <div class="flex min-h-screen flex-col">
    <LayoutSiteNav :logo-fill="logoFill" />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutSiteFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const logoFill = computed(() => {
  // Pages with dark hero sections get light logo
  const darkHeroPages = ['/', '/creative-services', '/about', '/case-studies', '/brand-audit']
  return darkHeroPages.includes(route.path) ? 'light' : 'dark'
})
</script>

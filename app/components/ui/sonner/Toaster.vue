<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :toast-options="{
      classes: {
        toast:
          'group toast group-[.toaster]:bg-white group-[.toaster]:text-[var(--color-text)] group-[.toaster]:border-[var(--color-border)] group-[.toaster]:shadow-lg group-[.toaster]:font-[var(--font-sans)]',
        description: 'group-[.toast]:text-[var(--color-text-muted)]',
        actionButton: 'group-[.toast]:bg-[var(--near-black)] group-[.toast]:text-white',
        cancelButton: 'group-[.toast]:bg-[var(--cloud)] group-[.toast]:text-[var(--color-text-muted)]',
      },
    }"
  />
</template>

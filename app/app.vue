<script setup>
import { Toaster } from "~/components/ui/sonner";

defineOgImageComponent("OgImageDefault");
</script>

<template>
  <div id="app">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ClientOnly>
      <Toaster position="top-center" />
    </ClientOnly>
  </div>
</template>

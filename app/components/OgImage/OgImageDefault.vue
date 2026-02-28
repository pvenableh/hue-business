<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: "Hue Creative Agency",
    description:
      "Strategic brand positioning, lead generation, and creative execution for growth-stage B2B companies.",
  },
);
</script>

<template>
  <div
    :style="{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      background: '#1d1d1f',
      padding: '60px 80px',
      fontFamily: 'Avenir Next, Helvetica Neue, Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }"
  >
    <!-- Decorative ring — subtle monochrome motif -->
    <div
      :style="{
        position: 'absolute',
        top: '-120px',
        right: '-120px',
        width: '440px',
        height: '440px',
        borderRadius: '50%',
        border: '2px solid rgba(255, 255, 255, 0.06)',
      }"
    />
    <div
      :style="{
        position: 'absolute',
        top: '-80px',
        right: '-80px',
        width: '360px',
        height: '360px',
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.04)',
      }"
    />

    <!-- Logo -->
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '40px',
      }"
    >
      <img
        src="/icon-512x512.png"
        width="140"
        height="140"
        :style="{
          width: '140px',
          height: '140px',
          borderRadius: '16px',
        }"
      />
    </div>

    <!-- Title -->
    <div
      :style="{
        fontSize: '52px',
        fontWeight: '300',
        color: '#ffffff',
        lineHeight: '1.15',
        marginBottom: '16px',
        letterSpacing: '-0.01em',
      }"
    >
      {{ title }}
    </div>

    <!-- Description -->
    <div
      :style="{
        fontSize: '24px',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: '1.5',
        maxWidth: '700px',
      }"
    >
      {{ description }}
    </div>

    <!-- Bottom accent bar — thin, monochrome gradient -->
    <div
      :style="{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '3px',
        background:
          'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
      }"
    />

    <!-- Site URL -->
    <div
      :style="{
        position: 'absolute',
        bottom: '24px',
        right: '80px',
        fontSize: '16px',
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.35)',
        letterSpacing: '0.06em',
      }"
    >
      huestudios.com
    </div>
  </div>
</template>

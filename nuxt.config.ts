import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      charset: "utf-8",
      htmlAttrs: { lang: "en" },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=5, viewport-fit=cover",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://huestudios.com",
    },
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "@nuxtjs/seo",
    "@vite-pwa/nuxt",
  ],

  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },

  site: {
    url: "https://huestudios.com",
    name: "Hue Creative Agency",
    description:
      "Strategic brand positioning, lead generation, and creative execution for growth-stage B2B companies.",
    defaultLocale: "en",
  },

  nitro: {
    compressPublicAssets: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Hue Creative Agency",
      short_name: "Hue",
      description:
        "Strategic brand positioning, lead generation, and creative execution for growth-stage B2B companies.",
      theme_color: "#0D0D0D",
      background_color: "#FAF8F4",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico,woff2}"],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: false,
    },
  },

  build: {
    transpile: ["gsap"],
  },
});

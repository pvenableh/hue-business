<template>
  <footer class="hue-section-dark">
    <!-- Top CTA Strip -->
    <div class="border-b border-white/10 px-6 py-20 text-center md:py-28">
      <div class="mx-auto max-w-lg">
        <p class="hue-overline mb-4 text-white/40">Ready to start?</p>
        <h2 class="hue-display-lg mb-6 text-white">
          Let's Create What<br>is Possible
        </h2>
        <p class="mb-10 text-[0.9375rem] leading-relaxed text-white/40">
          Schedule a discovery call to discuss your goals, challenges, and how we can help your brand command attention.
        </p>
        <NuxtLink to="/contact" class="hue-btn-ghost">
          Schedule a Discovery Call
        </NuxtLink>
      </div>
    </div>

    <!-- Footer Content -->
    <div class="hue-container px-6 py-16">
      <div class="grid gap-12 md:grid-cols-4">
        <!-- Brand -->
        <div class="md:col-span-1">
          <LayoutLogoVertical fill="grey" />
          <p class="mt-6 text-[0.8125rem] leading-relaxed text-white/30">
            Strategic brand positioning and creative execution for growth-stage B2B companies.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h3 class="hue-label mb-4 text-white/60">Services</h3>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/creative-services" class="footer-link">Service Packages</NuxtLink></li>
            <li><NuxtLink to="/creative-services#retainers" class="footer-link">Monthly Retainers</NuxtLink></li>
            <li><NuxtLink to="/creative-services#alacarte" class="footer-link">À La Carte</NuxtLink></li>
            <li><NuxtLink to="/brand-audit" class="footer-link">Free Brand Audit</NuxtLink></li>
          </ul>
        </div>

        <!-- Industries -->
        <div>
          <h3 class="hue-label mb-4 text-white/60">Industries</h3>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/industries/architecture-engineering" class="footer-link">Architecture & Engineering</NuxtLink></li>
            <li><NuxtLink to="/industries/real-estate-development" class="footer-link">Real Estate</NuxtLink></li>
            <li><NuxtLink to="/industries/professional-services" class="footer-link">Professional Services</NuxtLink></li>
            <li><NuxtLink to="/industries/technology-saas" class="footer-link">Technology & SaaS</NuxtLink></li>
            <li><NuxtLink to="/industries" class="footer-link">All Industries →</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="hue-label mb-4 text-white/60">Company</h3>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/case-studies" class="footer-link">Case Studies</NuxtLink></li>
            <li><NuxtLink to="/about" class="footer-link">About Hue</NuxtLink></li>
            <li><NuxtLink to="/contact" class="footer-link">Contact</NuxtLink></li>
          </ul>
          <div class="mt-8">
            <h3 class="hue-label mb-3 text-white/60">Locations</h3>
            <p class="text-[0.8125rem] leading-relaxed text-white/30">Miami Beach, FL</p>
            <p class="text-[0.8125rem] leading-relaxed text-white/30">New York, NY</p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
        <p class="text-[0.6875rem] tracking-wider text-white/20">
          © {{ new Date().getFullYear() }} HUE CREATIVE AGENCY. ALL RIGHTS RESERVED.
        </p>
        <p class="text-[0.6875rem] tracking-wider text-white/20">
          MIAMI BEACH · NEW YORK
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  display: block;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
  transition: color 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.footer-link:hover {
  color: rgba(255, 255, 255, 0.7);
}
</style>

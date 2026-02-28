import type { RouterOptions } from "@nuxt/schema";

export default <RouterOptions>{
  scrollBehavior(to, _from, savedPosition) {
    const nuxtApp = useNuxtApp();

    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce("page:finish", () => {
        setTimeout(() => {
          if (savedPosition) {
            resolve(savedPosition);
          } else if (to.hash) {
            resolve({
              el: to.hash,
              top: 100,
              behavior: "smooth",
            });
          } else {
            resolve({
              top: 0,
              left: 0,
              behavior: "instant",
            });
          }
        }, 50);
      });
    });
  },
};

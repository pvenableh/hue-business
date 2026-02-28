/**
 * IntersectionObserver-based scroll reveal.
 * Elements with class "reveal" will get "is-visible" added when they enter the viewport.
 * Use with the .reveal / .reveal-delay-N classes from hue-theme.css.
 *
 * Usage:
 *   const { initReveal } = useReveal()
 *   onMounted(() => initReveal())
 */
export function useReveal() {
  let observer: IntersectionObserver | null = null

  function initReveal(options: { threshold?: number; root?: Element | null } = {}) {
    if (typeof IntersectionObserver === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold ?? 0.15, root: options.root ?? null }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer!.observe(el))
  }

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { initReveal }
}

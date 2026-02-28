/**
 * GSAP ScrollTrigger composable for scroll-driven animations.
 * Provides fade-up, stagger, parallax, and line-reveal effects.
 */
import { onMounted, onUnmounted, type Ref } from 'vue'

let gsapInstance: any = null
let ScrollTriggerPlugin: any = null

async function loadGSAP() {
  if (gsapInstance) return { gsap: gsapInstance, ScrollTrigger: ScrollTriggerPlugin }
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  gsapInstance = gsap
  ScrollTriggerPlugin = ScrollTrigger
  return { gsap, ScrollTrigger }
}

export function useScrollAnimations() {
  const triggers: any[] = []

  onUnmounted(() => {
    triggers.forEach((t) => t.kill?.())
    triggers.length = 0
  })

  /**
   * Fade up elements as they enter viewport
   */
  async function fadeUp(
    elements: string | HTMLElement | HTMLElement[],
    options: {
      y?: number
      duration?: number
      stagger?: number
      delay?: number
      start?: string
    } = {}
  ) {
    const { gsap, ScrollTrigger } = await loadGSAP()
    const {
      y = 40,
      duration = 0.8,
      stagger = 0.15,
      delay = 0,
      start = 'top 85%',
    } = options

    const tween = gsap.fromTo(
      elements,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: typeof elements === 'string' ? elements : Array.isArray(elements) ? elements[0] : elements,
          start,
          toggleActions: 'play none none none',
        },
      }
    )

    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
    return tween
  }

  /**
   * Animate a horizontal line growing from center
   */
  async function lineReveal(
    element: string | HTMLElement,
    options: {
      duration?: number
      start?: string
    } = {}
  ) {
    const { gsap } = await loadGSAP()
    const { duration = 1.2, start = 'top 80%' } = options

    const tween = gsap.fromTo(
      element,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none none',
        },
      }
    )

    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
    return tween
  }

  /**
   * Parallax effect — element moves slower/faster than scroll
   */
  async function parallax(
    element: string | HTMLElement,
    options: {
      speed?: number
      start?: string
      end?: string
    } = {}
  ) {
    const { gsap } = await loadGSAP()
    const { speed = 0.3, start = 'top bottom', end = 'bottom top' } = options

    const tween = gsap.fromTo(
      element,
      { y: -60 * speed },
      {
        y: 60 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub: true,
        },
      }
    )

    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
    return tween
  }

  /**
   * Hero entrance animation timeline
   */
  async function heroEntrance(refs: {
    label?: Ref<HTMLElement | null>
    title?: Ref<HTMLElement | null>
    subtitle?: Ref<HTMLElement | null>
    cta?: Ref<HTMLElement | null>
  }) {
    const { gsap } = await loadGSAP()

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    if (refs.label?.value) {
      tl.fromTo(refs.label.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
    }
    if (refs.title?.value) {
      tl.fromTo(refs.title.value, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
    }
    if (refs.subtitle?.value) {
      tl.fromTo(refs.subtitle.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    }
    if (refs.cta?.value) {
      tl.fromTo(refs.cta.value, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    }

    return tl
  }

  /**
   * Stagger children of a container as they scroll in
   */
  async function staggerChildren(
    container: string | HTMLElement,
    childSelector: string,
    options: {
      y?: number
      duration?: number
      stagger?: number
      start?: string
    } = {}
  ) {
    const { gsap } = await loadGSAP()
    const { y = 30, duration = 0.6, stagger = 0.1, start = 'top 80%' } = options

    const el = typeof container === 'string' ? document.querySelector(container) : container
    if (!el) return

    const children = el.querySelectorAll(childSelector)
    const tween = gsap.fromTo(
      children,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      }
    )

    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
    return tween
  }

  /**
   * Counter animation — animates a number from 0 to target
   */
  async function countUp(
    element: HTMLElement,
    target: number,
    options: {
      duration?: number
      start?: string
      suffix?: string
      prefix?: string
    } = {}
  ) {
    const { gsap } = await loadGSAP()
    const { duration = 2, start = 'top 80%', suffix = '', prefix = '' } = options

    const obj = { val: 0 }
    const tween = gsap.to(obj, {
      val: target,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        element.textContent = `${prefix}${Math.round(obj.val)}${suffix}`
      },
    })

    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
    return tween
  }

  return {
    fadeUp,
    lineReveal,
    parallax,
    heroEntrance,
    staggerChildren,
    countUp,
    loadGSAP,
  }
}

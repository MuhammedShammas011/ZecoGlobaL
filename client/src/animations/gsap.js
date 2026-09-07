import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/* ── Common eases ──────────────────────────────────────────────────────────── */
export const EASE_OUT_EXPO = 'power4.out';
export const EASE_IN_OUT   = 'power3.inOut';
export const EASE_SMOOTH   = 'power2.out';

/* ── Text split reveal ─────────────────────────────────────────────────────── */
export const revealText = (el, delay = 0) => {
  if (!el) return;
  return gsap.from(el, {
    y: '105%',
    opacity: 0,
    duration: 1.2,
    ease: EASE_OUT_EXPO,
    delay,
  });
};

/* ── Fade up with ScrollTrigger ────────────────────────────────────────────── */
export const scrollFadeUp = (el, trigger, opts = {}) => {
  if (!el || !trigger) return;
  return gsap.from(el, {
    y: opts.y ?? 60,
    opacity: 0,
    duration: opts.duration ?? 1.1,
    ease: EASE_OUT_EXPO,
    scrollTrigger: {
      trigger,
      start: opts.start ?? 'top 82%',
      toggleActions: 'play none none none',
    },
    delay: opts.delay ?? 0,
  });
};

/* ── Stagger children ──────────────────────────────────────────────────────── */
export const staggerReveal = (parent, children, trigger, opts = {}) => {
  if (!parent || !children) return;
  return gsap.from(children, {
    y: opts.y ?? 40,
    opacity: 0,
    duration: opts.duration ?? 0.9,
    ease: EASE_OUT_EXPO,
    stagger: opts.stagger ?? 0.12,
    scrollTrigger: {
      trigger: trigger || parent,
      start: opts.start ?? 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

/* ── Image mask reveal ─────────────────────────────────────────────────────── */
export const maskReveal = (imgEl, trigger) => {
  if (!imgEl || !trigger) return;
  gsap.set(imgEl.parentElement, { overflow: 'hidden' });
  return gsap.from(imgEl, {
    scale: 1.15,
    opacity: 0,
    duration: 1.6,
    ease: EASE_OUT_EXPO,
    scrollTrigger: {
      trigger,
      start: 'top 78%',
      toggleActions: 'play none none none',
    },
  });
};

/* ── Number counter ────────────────────────────────────────────────────────── */
export const animateCounter = (el, target, trigger, suffix = '') => {
  if (!el || !trigger) return;
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: target,
    duration: 2.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    onUpdate() {
      el.textContent = Math.round(obj.val).toLocaleString() + suffix;
    },
  });
};

/* ── Horizontal parallax ───────────────────────────────────────────────────── */
export const parallaxX = (el, amount, trigger) => {
  if (!el || !trigger) return;
  return gsap.to(el, {
    x: amount,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
    },
  });
};

/* ── Vertical parallax ─────────────────────────────────────────────────────── */
export const parallaxY = (el, amount, trigger) => {
  if (!el || !trigger) return;
  return gsap.to(el, {
    y: amount,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
    },
  });
};

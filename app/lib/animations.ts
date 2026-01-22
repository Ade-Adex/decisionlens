import { Variants, Transition } from 'framer-motion'

/**
 * Shared transition for all UI animations
 * Typed correctly for TypeScript
 */
const baseTransition: Transition = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1], // cubic-bezier
}

/* ---------------- Fade Animations ---------------- */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
}

/* ---------------- Scale Animation ---------------- */

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: baseTransition,
  },
}

/* ---------------- Stagger Container ---------------- */

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}
